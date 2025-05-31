/**
 * Represents the data needed for the TankPacket.
 */
export interface Tank {
  packetType?: number;
  type?: number;
  punchID?: number;
  buildRange?: number;
  punchRange?: number;
  netID?: number;
  targetNetID?: number;
  state?: number;
  info?: number;
  xPos?: number;
  yPos?: number;
  xSpeed?: number;
  ySpeed?: number;
  xPunch?: number;
  yPunch?: number;
  data?: () => number[];
}

/**
 * The argument type for the variant.
 */
export type VariantArg = string | number[] | number;

/**
 * Options for the Variant Packet
 */
export interface VariantOptions {
  /**
   * The netID of the variant.
   */
  netID?: number;

  /**
   * They delay (in ms) on when the client will execute the packet.
   */
  delay?: number;
}

export interface VariantTypeBase {
  index: number;
  type: number;
  typeName: string;
}

export interface VariantTypeNumber extends VariantTypeBase {
  value: number;
}

export interface VariantTypeFloat extends VariantTypeBase {
  value: number[];
}

export interface VariantTypeString extends VariantTypeBase {
  value: string;
}

export type VariantArray = VariantTypeString | VariantTypeNumber | VariantTypeFloat;
