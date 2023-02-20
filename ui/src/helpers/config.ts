export function getBaseUrl(): string {
  return document.querySelector('meta[name="host"]')?.getAttribute("content") ?? "";
}

export function isDebug(): boolean {
  return window.location.host.startsWith("localhost");
}
