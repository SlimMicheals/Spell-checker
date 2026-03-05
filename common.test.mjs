import { getDictionarySize, wordExists } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("Dictionary size is correct", () => {
  assert.equal(getDictionarySize(), 856);
});

test("Known word exists in dictionary", () => {
  assert.equal(wordExists("go"), true);
});

test("Unknown word does not exist in dictionary", () => {
  assert.equal(wordExists("helo"), false);
});