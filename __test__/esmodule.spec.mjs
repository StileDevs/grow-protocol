import test from "ava";
import { TextPacket, ActionPacket, SetHasAccountSecured } from "../dist/index.mjs";

test.serial("TextPacket initialize", (t) => {
  const text = TextPacket.from(4, "awd", "action|type");
  console.log(text.parse().toString());
  t.log(text.parse());
  t.pass();
});

test.serial("ActionPacket initialize", (t) => {
  const text = ActionPacket.from("quit");
  t.log(text);
  t.pass();
});

test.serial("SetHasAccountSecured initialize", (t) => {
  const text = SetHasAccountSecured.from(true);
  t.log(text);
  t.log(text.variant.args);
  console.log(Buffer.from(text.variant.parse().parse().data).toString("hex").match(/../g).join(" "));
  t.pass();
});
