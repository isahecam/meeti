import clsx from "clsx"

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({ children, level = 1, className, ...props }: Props) {
  const Tag: React.ElementType = `h${level}`

  const sizeMap = {
    1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
    2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    4: "scroll-m-20 text-xl font-semibold tracking-tight",
    5: "scroll-m-20 text-lg font-semibold tracking-tight",
    6: "scroll-m-20 text-base font-semibold tracking-tight",
  } satisfies Record<number, string>

  return (
    <Tag className={clsx("uppercase", sizeMap[level], className)} {...props}>
      {children}
    </Tag>
  )
}
