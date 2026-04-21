import { redirect } from "next/navigation"

import { SiteHeader } from "~/features/dashboard/components/site-header"
import { requireAuth } from "~/lib/auth-server"

export default async function DashboardPage() {
  const { isAuth } = await requireAuth()

  if (!isAuth) {
    redirect("/auth/login")
  }

  return (
    <>
      <SiteHeader />
    </>
  )
}
