import { redirect } from "next/navigation"

import { requireAuth } from "~/lib/auth-server"
import { Heading } from "~/shared/components/typography/heading"

export default async function DashboardPage() {
  const { isAuth } = await requireAuth()

  if (!isAuth) {
    redirect("/auth/login")
  }

  return (
    <>
      <Heading level={1}>Dashboard</Heading>
    </>
  )
}
