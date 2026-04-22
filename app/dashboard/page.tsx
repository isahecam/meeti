import { redirect } from "next/navigation"

import { requireAuth } from "~/lib/auth-server"

export default async function DashboardPage() {
  const { isAuth } = await requireAuth()

  if (!isAuth) {
    redirect("/auth/login")
  }

  return <div>DashboardPage</div>
}
