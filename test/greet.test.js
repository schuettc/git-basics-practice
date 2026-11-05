import { test } from "node:test";
import assert from "node:assert/strict";
import { greet, whisper } from "../src/greet.js";

test("greet says hello", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("whisper says hello in lower case", () => {
  assert.equal(whisper("Ada"), "hello, ada!");
});
