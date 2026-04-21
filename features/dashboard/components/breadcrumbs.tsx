"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { NAV_MAIN_ITEMS } from "~/features/dashboard/constants/nav-main-items"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/shared/components/ui/breadcrumb"

export function Breadcrumbs() {
  const pathname = usePathname()

  const crumbs = NAV_MAIN_ITEMS.filter((item) => pathname.startsWith(item.url))

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map(({ title, url }, i) => {
          const isLast = i === crumbs.length - 1

          return (
            <span key={url} className="contents">
              {i > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={url}>{title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
