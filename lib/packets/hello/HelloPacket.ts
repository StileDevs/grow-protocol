import { PacketTypes } from "../../Constants";
import { ExtendBuffer } from "../../ExtendBuffer";

export class HelloPacket {
  public packetType = PacketTypes.HELLO;
  public type = 0;

  constructor() {}

  public parse() {
    const buffer = new ExtendBuffer(4);
    buffer.writeU32(this.packetType);
    return buffer;
  }
}
