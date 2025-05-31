import { Tank } from "../../types";
import { PacketTypes, TANK_HEADER_SIZE } from "../Constants";
import { ExtendBuffer } from "../ExtendBuffer";

/**
 * TankPacket class to create tank game packet to handle player behavior.
 */
export class TankPacket {
  /**
   * Creates a new instance of the TankPacket class.
   * @param data The tankpacket header and data.
   */
  constructor(public data?: Tank) {}

  /**
   * Creates a new instance of the TankPacket class.
   * @param data TankPacket header and data.
   */
  public static from(data: Tank) {
    return new TankPacket(data);
  }

  /**
   * Converts a buffer to a tank packet.
   * @param buf The buffer to convert.
   */
  public static fromBuffer(buf: ExtendBuffer) {
    const data: Tank = {
      packetType: buf.readI32(),
      type: buf.readU8(),
      punchID: buf.readU8(),
      buildRange: buf.readU8(),
      punchRange: buf.readU8(),
      netID: buf.readI32(),
      targetNetID: buf.readI32(),
      state: buf.readU32(),
      info: buf.readI32(),
      xPos: buf.readFloat(),
      yPos: buf.readFloat(),
      xSpeed: buf.readFloat(),
      ySpeed: buf.readFloat(),
      xPunch: buf.readI32(),
      yPunch: buf.readI32()
    };

    const dataLength = buf.readI32();
    if (dataLength > 0) data.data = () => buf.slice(60, 60 + dataLength);

    return new TankPacket(data);
  }

  /**
   * Converts the TankPacket class to a Buffer
   */
  public parse() {
    if (!this.data) return;
    let buf = new ExtendBuffer(TANK_HEADER_SIZE);

    buf.writeU32(PacketTypes.TANK);
    buf.writeU8(this.data.type ?? 0);
    buf.writeU8(this.data.punchID ?? 0);
    buf.writeU8(this.data.buildRange ?? 0);
    buf.writeU8(this.data.punchRange ?? 0);
    buf.writeI32(this.data.netID ?? 0);
    buf.writeI32(this.data.targetNetID ?? 0);
    buf.writeU32(this.data.state ?? 0x8);
    buf.writeI32(this.data.info ?? 0);
    buf.writeFloat(this.data.xPos ?? 0);
    buf.writeFloat(this.data.yPos ?? 0);
    buf.writeFloat(this.data.xSpeed ?? 0);
    buf.writeFloat(this.data.ySpeed ?? 0);
    buf.writeI32(this.data.xPunch ?? 0);
    buf.writeI32(this.data.yPunch ?? 0);

    if (typeof this.data.data === "function") {
      const extra = this.data.data();
      if (!Array.isArray(extra)) return;

      buf.writeU32(extra.length);
      buf.concat(extra);
    }

    return buf;
  }
}
