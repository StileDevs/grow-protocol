import { VariantOptions } from "../../../types";
import { PacketTypes } from "../../Constants";
import { Variant } from "../../structures/Variant";

export abstract class VariantBase {
  public packetType = PacketTypes.TANK;
  public abstract name: string;
  public type = 1; // Variant Type
  public opts: VariantOptions;
  public variant!: Variant;

  constructor(opts: VariantOptions = {}) {
    this.opts = {
      netID: opts.netID ?? -1,
      delay: opts.delay ?? 0
    };
  }

  protected createVariant(variantValue: any): Variant {
    return Variant.from(this.opts, this.name, variantValue);
  }

  public abstract parse(): Variant;
}
