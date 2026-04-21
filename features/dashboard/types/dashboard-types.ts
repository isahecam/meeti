import type { LucideIcon } from "lucide-react"
import { LinkProps } from "next/link"

export interface NavItem {
  title: string
  url: LinkProps<"href">["href"]
  icon: LucideIcon
}
