import React from "react"

import { resend } from "~/lib/resend"
import { err, ok } from "~/lib/result"

interface SendEmailOptions {
  from: string
  to: string
  subject: string
  react: React.ReactNode
  text: string
}

export class EmailService {
  static async send({ from, to, subject, react, text }: SendEmailOptions) {
    const { data, error } = await resend.emails.send({ from, to, subject, react, text })

    if (error) return err({ reason: error.name })

    return ok(data)
  }
}
