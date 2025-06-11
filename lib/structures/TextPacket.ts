import { ExtendBuffer } from "../ExtendBuffer";
import { TextParser } from "./TextParser";

/**
 * TextPacket class to create text packets such as for actions or other uses.
 */
export class TextPacket {
  /**
   * The parsed text data as an object.
   */
  public parsed: TextParser;

  /**
   * Creates a new TextPacket class
   * @param type The type of the packet.
   * @param strings An array of strings to include, they will be joined by a newline character. (`\n`)
   */
  constructor(public type: number, public strings: string[]) {
    this.parsed = new TextParser(strings.join("\n"));
  }

  /**
   * Creates a TextPacket class.
   * @param type The type of the packet.
   * @param strings Strings to include to the packet. They are not arrays, but instead they are arguments for the function.
   */
  public static from(type: number, ...strings: string[]) {
    return new TextPacket(type, strings);
  }

  /**
   * Creates a TextPacket from a TextParser object
   * @param type The type of the packet
   * @param parser The TextParser object
   */
  public static fromParser(type: number, parser: TextParser) {
    const strings = parser.toString().split("\n");
    const packet = new TextPacket(type, strings);
    packet.parsed = parser;
    return packet;
  }

  /**
   * Creates a TextPacket class from an ExtendBuffer.
   * @param packet The ExtendBuffer to convert.
   */
  public static fromBuffer(packet: ExtendBuffer) {
    if (packet.data.length < 4) throw new Error("Invalid packet received.");
    const type = packet.readU32();

    // Read the rest of the data as a string
    const chars = packet.data.slice(packet.mempos);
    const str = String.fromCharCode(...chars).slice(0, -1) ?? ""; // Remove null terminator

    return new TextPacket(type, str.split("\n"));
  }

  /**
   * Updates the strings array based on the current state of the parsed object
   */
  public updateStrings(): void {
    this.strings = this.parsed.toString().split("\n");
  }

  /**
   * Parses the TextPacket and converts it to an ExtendBuffer.
   */
  public parse() {
    // Make sure strings reflect current parsed state
    this.updateStrings();
    const str = this.strings.join("\n");
    const buffer = new ExtendBuffer(4 + str.length + 1); // + 1 for null terminator

    buffer.writeU32(this.type);

    // Write the string characters
    for (let i = 0; i < str.length; i++) {
      buffer.writeU8(str.charCodeAt(i));
    }

    // Add null terminator
    buffer.writeU8(0);

    return buffer;
  }
}
