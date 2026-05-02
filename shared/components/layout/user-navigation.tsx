import Link from "next/link"

import { UserMenu } from "~/features/dashboard/components/user-menu"
import { buttonVariants } from "~/shared/components/ui/button"

export function UserNavigation() {
  return (
    <nav className="flex items-center justify-center gap-4">
      <Link href="/dashboard" className={buttonVariants({ variant: "default" })}>
        Panel de Administración
      </Link>

      <UserMenu />
    </nav>
  )
}
