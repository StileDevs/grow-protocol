import test from "ava";
import { TextPacket } from "../dist/index.mjs";

test.serial("TextPacket initialize", (t) => {
  const text = TextPacket.from(4, "awd", "action|type");
  console.log(text.parse().toString());
  t.log(text.parse());
  t.pass();
});
