import Link from "next/link"

import { buttonVariants } from "~/shared/components/ui/button"

export function GuestNavigation() {
  return (
    <nav className="mt-5 flex items-center justify-center gap-4 md:mt-0">
      <Link className={buttonVariants({ variant: "outline" })} href="/auth/login">
        Iniciar Sesión
      </Link>
      <Link className={buttonVariants({ variant: "default" })} href="/auth/create-account">
        Registrarse
      </Link>
    </nav>
  )
}
