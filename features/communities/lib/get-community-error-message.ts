const COMMUNITY_ERROR_MESSAGES = new Map<string, string>([
  ["UNAUTHORIZED", "No tienes permisos para crear una comunidad."],
  ["FAILED_TO_CREATE_COMMUNITY", "No pudimos crear la comunidad. Intenta nuevamente."],
  ["INVALID_DATA", "Los datos enviados no son válidos."],
  ["UNEXPECTED_ERROR", "Ocurrió un error inesperado. Intenta nuevamente."],
])

export function getCommunityErrorMessage(code: string | undefined | null) {
  if (!code) return COMMUNITY_ERROR_MESSAGES.get("UNEXPECTED_ERROR")
  return COMMUNITY_ERROR_MESSAGES.get(code)
}
