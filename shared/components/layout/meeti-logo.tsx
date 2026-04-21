import Image from "next/image"

export function MeetiLogo({ ...props }: Pick<React.ComponentProps<typeof Image>, "className" | "width" | "height">) {
  return <Image src="/meeti-logo.svg" alt="Meeti Logo" width={120} height={60} className="aspect-auto" {...props} />
}
