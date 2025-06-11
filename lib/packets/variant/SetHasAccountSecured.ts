import { VariantOptions } from "../../../types";
import { VariantTypes } from "../../Constants";
import { Variant } from "../../structures/Variant";
import { VariantBase } from "./VariantBase";

export class SetHasAccountSecured extends VariantBase {
  public name = "SetHasAccountSecured";
  public isSecured: boolean;

  constructor(isSecured: boolean, opts: VariantOptions = {}) {
    super(opts);
    this.isSecured = isSecured;
    this.variant = this.createVariant(this.isSecured ? 1 : 0);
  }

  public static from(isSecured: boolean) {
    return new SetHasAccountSecured(isSecured);
  }

  public parse() {
    return this.variant;
  }
}
