const AUTH_ERROR_MESSAGES = {
  USER_NOT_FOUND: "No encontramos una cuenta asociada a los datos proporcionados.",
  FAILED_TO_CREATE_USER: "No pudimos crear tu cuenta. Intenta nuevamente.",
  FAILED_TO_CREATE_SESSION: "No pudimos iniciar tu sesión. Intenta nuevamente.",
  FAILED_TO_UPDATE_USER: "No pudimos actualizar tu cuenta. Intenta nuevamente.",
  FAILED_TO_GET_SESSION: "No pudimos obtener tu sesión. Intenta nuevamente.",
  INVALID_PASSWORD: "La contraseña no es válida.",
  INVALID_EMAIL: "El correo electrónico no es válido.",
  INVALID_EMAIL_OR_PASSWORD: "El correo o la contraseña son incorrectos.",
  INVALID_USER: "El usuario no es válido.",
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Esta cuenta social ya está vinculada.",
  PROVIDER_NOT_FOUND: "El proveedor de autenticación no existe.",
  INVALID_TOKEN: "El token no es válido.",
  TOKEN_EXPIRED: "El token ha expirado.",
  ID_TOKEN_NOT_SUPPORTED: "El id_token no es compatible.",
  FAILED_TO_GET_USER_INFO: "No pudimos obtener la información del usuario.",
  USER_EMAIL_NOT_FOUND: "No encontramos el correo del usuario.",
  EMAIL_NOT_VERIFIED: "Tu cuenta no ha sido verificada. Hemos enviado un nuevo correo de verificación.",
  PASSWORD_TOO_SHORT: "La contraseña es demasiado corta.",
  PASSWORD_TOO_LONG: "La contraseña es demasiado larga.",
  USER_ALREADY_EXISTS: "Ya existe una cuenta con esos datos.",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "Ya existe una cuenta con este correo.",
  EMAIL_CAN_NOT_BE_UPDATED: "El correo electrónico no puede ser actualizado.",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "No encontramos una cuenta con esas credenciales.",
  SESSION_EXPIRED: "Tu sesión ha expirado. Inicia sesión nuevamente.",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "No puedes desvincular tu única cuenta.",
  ACCOUNT_NOT_FOUND: "No encontramos la cuenta.",
  USER_ALREADY_HAS_PASSWORD: "El usuario ya tiene una contraseña configurada.",
  CROSS_SITE_NAVIGATION_LOGIN_BLOCKED: "La solicitud fue bloqueada por seguridad.",
  VERIFICATION_EMAIL_NOT_ENABLED: "La verificación por correo no está habilitada.",
  EMAIL_ALREADY_VERIFIED: "El correo ya ha sido verificado.",
  EMAIL_MISMATCH: "El correo electrónico no coincide.",
  SESSION_NOT_FRESH: "Debes volver a iniciar sesión para realizar esta acción.",
  LINKED_ACCOUNT_ALREADY_EXISTS: "La cuenta vinculada ya existe.",
  INVALID_ORIGIN: "El origen de la solicitud no es válido.",
  INVALID_CALLBACK_URL: "La URL de retorno no es válida.",
  INVALID_REDIRECT_URL: "La URL de redirección no es válida.",
  INVALID_ERROR_CALLBACK_URL: "La URL de retorno de error no es válida.",
  INVALID_NEW_USER_CALLBACK_URL: "La URL de retorno para nuevos usuarios no es válida.",
  MISSING_OR_NULL_ORIGIN: "La solicitud no incluye un origen válido.",
  CALLBACK_URL_REQUIRED: "La URL de retorno es obligatoria.",
  FAILED_TO_CREATE_VERIFICATION: "No pudimos generar la verificación.",
  FIELD_NOT_ALLOWED: "Hay un campo no permitido en la solicitud.",
  ASYNC_VALIDATION_NOT_SUPPORTED: "La validación asíncrona no es compatible.",
  VALIDATION_ERROR: "Los datos enviados no son válidos.",
  MISSING_FIELD: "Falta un campo obligatorio.",
  METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED: "El método no está permitido para esta configuración de sesión.",
  BODY_MUST_BE_AN_OBJECT: "El cuerpo de la solicitud debe ser un objeto.",
  PASSWORD_ALREADY_SET: "El usuario ya tiene una contraseña configurada.",
  INVALID_DATA: "Los datos enviados no son válidos.",
  UNEXPECTED_ERROR: "Ocurrió un error inesperado. Intenta nuevamente.",
} as const satisfies Record<string, string>

export type AuthErrorCode = keyof typeof AUTH_ERROR_MESSAGES

const FALLBACK_MESSAGE = AUTH_ERROR_MESSAGES.UNEXPECTED_ERROR

export function getAuthErrorMessage(code: string | undefined | null): string {
  if (!code) return FALLBACK_MESSAGE

  return AUTH_ERROR_MESSAGES[code as AuthErrorCode] ?? FALLBACK_MESSAGE
}
