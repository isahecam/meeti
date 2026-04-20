import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function Paragraph({ children, className, ...props }: Props) {
  return (
    <p className={clsx("leading-7 not-first:mt-6", className)} {...props}>
      {children}
    </p>
  )
}
