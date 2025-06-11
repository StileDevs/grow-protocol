import { PacketTypes } from "../../Constants";
import { TextPacket } from "../../structures/TextPacket";

export class ActionPacket {
  public packetType = PacketTypes.ACTION;
  public type = 0;
  public data: TextPacket;
  public action: string;

  constructor(action: string) {
    this.data = TextPacket.from(PacketTypes.ACTION, "action|" + action);
    this.action = action;
  }

  public static from(action: string) {
    return new ActionPacket(action);
  }

  public addAction(action: string): void {
    if (this.data.parsed.get("action")) return;
    this.action = action;
    this.data.parsed.set("action", action);
  }

  public add(key: string, value: string | string[]): void {
    this.data.parsed.set(key, value);
  }

  public parse() {
    return this.data.parse();
  }
}
