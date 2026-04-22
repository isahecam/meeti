import { z } from "zod"

export const BaseAuthSchema = z.object({
  name: z.string().trim().nonempty({ error: "El nombre es obligatorio" }),
  email: z
    .email({ error: "El correo electrónico no es válido" })
    .nonempty({ error: "El correo electrónico es obligatorio" }),
  password: z.string().trim().min(8, "La contraseña debe tener al menos 8 caracteres"),
  passwordConfirmation: z.string().trim().nonempty({ error: "La confirmación de la contraseña es obligatoria" }),
})

export const SignUpSchema = BaseAuthSchema.pick({
  name: true,
  email: true,
  password: true,
  passwordConfirmation: true,
}).refine((data) => data.password === data.passwordConfirmation, {
  error: "Las contraseñas no coinciden",
  path: ["passwordConfirmation"],
})

export const SignInSchema = BaseAuthSchema.pick({ email: true }).extend({
  password: z.string().trim().nonempty({ error: "Establece tu contraseña para iniciar sesión" }),
})

export const ForgotPasswordSchema = BaseAuthSchema.pick({ email: true })

export const ResetPasswordSchema = BaseAuthSchema.pick({ password: true, passwordConfirmation: true }).refine(
  (data) => data.password === data.passwordConfirmation,
  {
    error: "Las contraseñas no coinciden",
    path: ["passwordConfirmation"],
  },
)

export type SignUpType = z.infer<typeof SignUpSchema>
export type SignInType = z.infer<typeof SignInSchema>
export type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>
export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>
