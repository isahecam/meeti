"use client"

import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/shared/components/ui/breadcrumb"

const LABELS: Record<string, string> = {
  dashboard: "Panel",
  communities: "Comunidades",
  create: "Crear",
  edit: "Editar",
  joined: "A las que te uniste",
  settings: "Configuración",
}

interface Crumb {
  label: string
  href: Route
}

function buildCrumbs(pathname: string): Crumb[] {
  return pathname
    .split("/")
    .filter(Boolean)
    .map((segment, i, arr) => ({
      label: LABELS[segment] ?? segment.charAt(0).toUpperCase() + segment.slice(1),
      href: ("/" + arr.slice(0, i + 1).join("/")) as Route,
    }))
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const crumbs = buildCrumbs(pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map(({ label, href }, i) => (
          <span key={href} className="contents">
            {i > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {i === crumbs.length - 1 ? (
                <BreadcrumbPage>{label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={href}>{label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
