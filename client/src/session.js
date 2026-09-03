export const SESSION_STORAGE_KEY = "civic-voice-session";

export function loadSession(storage = localStorage) {
  try {
    const savedSession = storage.getItem(SESSION_STORAGE_KEY);
    if (!savedSession) return null;

    const session = JSON.parse(savedSession);
    if (session?.user) return session;

    storage.removeItem(SESSION_STORAGE_KEY);
  } catch {
    storage.removeItem(SESSION_STORAGE_KEY);
  }

  return null;
}

export function saveSession(session, storage = localStorage) {
  storage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function clearSession(storage = localStorage) {
  storage.removeItem(SESSION_STORAGE_KEY);
}
