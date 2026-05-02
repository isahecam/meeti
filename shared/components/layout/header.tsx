import Link from "next/link"

import { getServerSession } from "~/lib/auth-server"
import { GuestNavigation } from "~/shared/components/layout/guest-navigation"
import { MeetiLogo } from "~/shared/components/layout/meeti-logo"
import { UserNavigation } from "~/shared/components/layout/user-navigation"

export async function Header() {
  const session = await getServerSession()
  return (
    <header>
      <div className="mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between lg:px-0">
        <div className="flex justify-center py-10 md:py-0">
          <Link href="/" className="outline-none">
            <MeetiLogo />
          </Link>
        </div>
        {session ? <UserNavigation user={session.user} /> : <GuestNavigation />}
      </div>
    </header>
  )
}
