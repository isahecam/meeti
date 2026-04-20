import { FormHTMLAttributes } from "react"

export function Form({ children, ...props }: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className="flex flex-col gap-8" {...props}>
      {children}
    </form>
  )
}
