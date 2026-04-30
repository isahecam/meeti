import { requireAuth } from "~/lib/auth-server"

export default async function DashboardPage() {
  await requireAuth()

  return <div>DashboardPage</div>
}
