export function normalizeVolumeValue(value: number) {
  return Math.min(Math.max(0, value), 100)
}