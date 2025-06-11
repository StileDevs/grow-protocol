import { VariantOptions } from "../../../types";
import { PacketTypes } from "../../Constants";
import { Variant } from "../../structures/Variant";
import { VariantBase } from "./VariantBase";

export class OnConsoleMessage extends VariantBase {
  public name = "OnConsoleMessage";
  public message: string;

  constructor(message: string, opts: VariantOptions = {}) {
    super(opts);
    this.message = message;
    this.variant = this.createVariant(this.message);
  }

  public static from(message: string) {
    return new OnConsoleMessage(message);
  }

  public parse() {
    return this.variant;
  }
}
