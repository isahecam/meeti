import { emailConfig } from "~/shared/emails/config"
import { EmailService } from "~/shared/emails/services/email-service"
import { PasswordResetEmail, renderPasswordResetEmailText } from "~/shared/emails/templates/password-reset-email"
import { renderVerificationEmailText, VerificationEmail } from "~/shared/emails/templates/verification-email"

export class AuthEmailService {
  static async sendVerificationEmail(name: string, email: string, url: string) {
    const { text } = await renderVerificationEmailText({
      name,
      url,
      tokenExpiration: emailConfig.tokenExpiration,
    })

    await EmailService.send({
      from: emailConfig.from.verification,
      to: email,
      subject: "Meeti - Verificación de cuenta",
      react: VerificationEmail({ name, url, tokenExpiration: emailConfig.tokenExpiration }),
      text,
    })
  }

  static async sendPasswordResetEmail(name: string, email: string, url: string) {
    const { text } = await renderPasswordResetEmailText({ name, url })

    await EmailService.send({
      from: emailConfig.from.passwordReset,
      to: email,
      subject: "Meeti - Recuperación de contraseña",
      react: PasswordResetEmail({ name, url }),
      text,
    })
  }
}
