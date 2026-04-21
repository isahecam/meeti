"use client"

import { NavMainSidebar } from "~/features/dashboard/components/sidebar/nav-main-sidebar"
import { NAV_MAIN_ITEMS } from "~/features/dashboard/constants/nav-main-items"
import { MeetiLogo } from "~/shared/components/layout/meeti-logo"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "~/shared/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <MeetiLogo className="mx-auto" />
      </SidebarHeader>
      <SidebarContent>
        <NavMainSidebar items={NAV_MAIN_ITEMS} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
