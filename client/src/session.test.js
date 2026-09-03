import { describe, expect, it } from "vitest";
import { clearSession, loadSession, saveSession, SESSION_STORAGE_KEY } from "./session";

function createStorage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    removeItem: (key) => values.delete(key),
    setItem: (key, value) => values.set(key, value),
  };
}

describe("session storage", () => {
  it("restores a saved session", () => {
    const storage = createStorage();
    const session = { user: { name: "Aisha Tan", role: "citizen" } };

    saveSession(session, storage);

    expect(loadSession(storage)).toEqual(session);
  });

  it("clears the saved session on sign out", () => {
    const storage = createStorage();
    saveSession({ user: { name: "Aisha Tan", role: "citizen" } }, storage);

    clearSession(storage);

    expect(loadSession(storage)).toBeNull();
  });

  it("removes malformed sessions instead of restoring them", () => {
    const storage = createStorage();
    storage.setItem(SESSION_STORAGE_KEY, "not-json");

    expect(loadSession(storage)).toBeNull();
    expect(storage.getItem(SESSION_STORAGE_KEY)).toBeNull();
  });
});
