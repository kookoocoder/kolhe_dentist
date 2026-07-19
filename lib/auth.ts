const AUTH_KEY = "dental_auth"
export const PASSWORD = "kolhe dentist"

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(AUTH_KEY) === "true"
}

export function setAuth(): void {
  localStorage.setItem(AUTH_KEY, "true")
}

export function clearAuth(): void {
  localStorage.removeItem(AUTH_KEY)
}
