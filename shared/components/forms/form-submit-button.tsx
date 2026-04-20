import { ButtonHTMLAttributes } from "react"

import { Button } from "~/shared/components/ui/button"

export function FormSubmitButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  )
}
