import { describe, expect, it } from "vitest";
import { isValidWorkshopNric } from "./nric";

describe("isValidWorkshopNric", () => {
  it("accepts seeded workshop IDs", () => {
    expect(isValidWorkshopNric("S0000001A")).toBe(true);
    expect(isValidWorkshopNric("S0000002B")).toBe(true);
  });

  it("rejects empty and malformed IDs", () => {
    expect(isValidWorkshopNric("")).toBe(false);
    expect(isValidWorkshopNric("S123")).toBe(false);
    expect(isValidWorkshopNric("12345678A")).toBe(false);
  });
});
