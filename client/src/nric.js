export function isValidWorkshopNric(value) {
  return /^[STFG]\d{7}[A-Z]$/i.test(value.trim());
}
