import { AppSidebar } from "~/features/dashboard/components/sidebar/app-sidebar"
import { SiteHeader } from "~/features/dashboard/components/site-header"
import { SidebarInset, SidebarProvider } from "~/shared/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <>
          <SiteHeader />
          {children}
        </>
      </SidebarInset>
    </SidebarProvider>
  )
}
