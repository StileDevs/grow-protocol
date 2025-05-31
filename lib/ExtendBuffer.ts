export class ExtendBuffer {
  public data: number[];

  constructor(data: number[] | number, public mempos = 0) {
    this.data = Array.isArray(data) ? data : new Array(data).fill(0);
  }

  private read(size: number): number {
    let value = 0;
    for (let i = 0; i < size; i++) {
      value |= this.data[this.mempos + i] << (i * 8);
    }
    this.mempos += size;
    return value >>> 0;
  }

  private readSigned(size: number): number {
    let value = this.read(size);
    const bits = size * 8;
    if (value & (1 << (bits - 1))) {
      value = value - (1 << bits);
    }
    return value;
  }

  private write(value: number, size: number): void {
    for (let i = 0; i < size; i++) {
      this.data[this.mempos + i] = (value >> (i * 8)) & 0xff;
    }
    this.mempos += size;
  }

  public readU8 = () => this.read(1);
  public readU16 = (be = false) => (be ? this.readBE(2) : this.read(2));
  public readU32 = (be = false) => (be ? this.readBE(4) : this.read(4));
  public readU64 = (be = false): bigint => {
    const low = be ? this.readBE(4) : this.read(4);
    const high = be ? this.readBE(4) : this.read(4);
    return be ? (BigInt(high) << 32n) | BigInt(low >>> 0) : (BigInt(high) << 32n) | BigInt(low >>> 0);
  };

  public readI8 = () => this.readSigned(1);
  public readI16 = (be = false) => (be ? this.readSignedBE(2) : this.readSigned(2));
  public readI32 = (be = false) => (be ? this.readSignedBE(4) : this.readSigned(4));
  public readI64 = (be = false): bigint => {
    const value = this.readU64(be);
    if (value & (1n << 63n)) {
      return value - (1n << 64n);
    }
    return value;
  };

  public readFloat = (be = false): number => {
    const bytes = new Uint8Array(4);
    for (let i = 0; i < 4; i++) {
      bytes[be ? 3 - i : i] = this.data[this.mempos + i];
    }
    this.mempos += 4;
    return new Float32Array(bytes.buffer)[0];
  };

  public readDouble = (be = false): number => {
    const bytes = new Uint8Array(8);
    for (let i = 0; i < 8; i++) {
      bytes[be ? 7 - i : i] = this.data[this.mempos + i];
    }
    this.mempos += 8;
    return new Float64Array(bytes.buffer)[0];
  };

  private readBE(size: number): number {
    let value = 0;
    for (let i = 0; i < size; i++) {
      value = (value << 8) | this.data[this.mempos + i];
    }
    this.mempos += size;
    return value >>> 0;
  }

  private readSignedBE(size: number): number {
    let value = this.readBE(size);
    const bits = size * 8;
    if (value & (1 << (bits - 1))) {
      value = value - (1 << bits);
    }
    return value;
  }

  public writeU8 = (value: number) => this.write(value, 1);
  public writeU16 = (value: number, be = false) => (be ? this.writeBE(value, 2) : this.write(value, 2));
  public writeU32 = (value: number, be = false) => (be ? this.writeBE(value, 4) : this.write(value, 4));
  public writeU64 = (value: bigint, be = false): void => {
    const high = Number(value >> 32n);
    const low = Number(value & 0xffff_ffffn);
    if (be) {
      this.writeBE(high, 4);
      this.writeBE(low, 4);
    } else {
      this.write(low, 4);
      this.write(high, 4);
    }
  };

  public writeI8 = (value: number) => this.write(value, 1);
  public writeI16 = (value: number, be = false) => (be ? this.writeBE(value, 2) : this.write(value, 2));
  public writeI32 = (value: number, be = false) => (be ? this.writeBE(value, 4) : this.write(value, 4));
  public writeI64 = (value: bigint, be = false): void => this.writeU64(value, be);

  public writeFloat = (value: number, be = false): void => {
    const bytes = new Uint8Array(new Float32Array([value]).buffer);
    for (let i = 0; i < 4; i++) {
      this.data[this.mempos + i] = bytes[be ? 3 - i : i];
    }
    this.mempos += 4;
  };

  public writeDouble = (value: number, be = false): void => {
    const bytes = new Uint8Array(new Float64Array([value]).buffer);
    for (let i = 0; i < 8; i++) {
      this.data[this.mempos + i] = bytes[be ? 7 - i : i];
    }
    this.mempos += 8;
  };

  private writeBE(value: number, size: number): void {
    for (let i = 0; i < size; i++) {
      this.data[this.mempos + i] = (value >> ((size - 1 - i) * 8)) & 0xff;
    }
    this.mempos += size;
  }

  public writeU = (size: 1 | 2 | 4 | 8, value: number | bigint, be = false) => {
    const methods = {
      1: this.writeU8,
      2: this.writeU16,
      4: this.writeU32,
      8: (v: bigint, b: boolean) => this.writeU64(BigInt(v), b)
    };
    /* @ts-expect-error ignore checking type between number | bigint */
    methods[size](value, be);
  };

  public writeI = (size: 1 | 2 | 4 | 8, value: number | bigint, be = false) => {
    const methods = {
      1: this.writeI8,
      2: this.writeI16,
      4: this.writeI32,
      8: (v: bigint, b: boolean) => this.writeI64(BigInt(v), b)
    };
    /* @ts-expect-error ignore checking type between number | bigint */
    methods[size](value, be);
  };

  public async readString(be = false) {
    const len = be ? this.readBE(2) : this.read(2);
    const chars = this.data.slice(this.mempos, this.mempos + len);
    this.mempos += len;
    return String.fromCharCode(...chars);
  }

  public async writeString(str: string, be = false) {
    const bytes = str.split("").map((char) => char.charCodeAt(0));
    be ? this.writeBE(str.length, 2) : this.write(str.length, 2);
    for (const byte of bytes) {
      this.data[this.mempos++] = byte;
    }
  }

  public slice(start?: number, end?: number) {
    return this.data.slice(start, end);
  }

  public concat(buffer: ExtendBuffer | number[]): ExtendBuffer {
    const dataToAdd = buffer instanceof ExtendBuffer ? buffer.data : buffer;
    this.data = [...this.data, ...dataToAdd];
    return this;
  }

  toString(): string {
    return `[${this.data.toString()}]`;
  }
}
