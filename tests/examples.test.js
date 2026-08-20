import { describe, it, expect, test } from "vitest";
import { longestString } from "../src/examples.js";

describe("examples.longestString", () => {
  test("returns the longest string", () => {
    const longest = longestString("pikachu", "snorlax");

    expect(longest).toBe("pikachu");
  });

  it("returns the first string when both are of equal length", () => {
    expect(longestString("ditto", "pidgy")).toBe("ditto");
  });

  it("it handles empty strings", () => {
    expect(longestString("", "mario")).toBe("mario");
    expect(longestString("luigi", "")).toBe("luigi");
    expect(longestString("", "")).toBe("");
  });

  it("ignores leading/trailing whitespace", () => {
    expect(longestString("   ash  ", "misty")).toBe("misty");
  });
});
