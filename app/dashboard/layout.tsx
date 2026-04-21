import { AppSidebar } from "~/features/dashboard/components/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "~/shared/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
