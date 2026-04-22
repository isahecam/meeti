import { NavItem } from "~/features/dashboard/types/dashboard-types"

export function getNavPathname(url: NavItem["url"]): string {
  if (typeof url === "string") return url
  return url.pathname ?? ""
}

export function isActiveRoute(itemUrl: NavItem["url"], pathname: string): boolean {
  const path = getNavPathname(itemUrl)
  if (path === "/dashboard") return pathname === path
  return pathname.startsWith(path)
}
