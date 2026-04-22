import { Breadcrumbs } from "~/features/dashboard/components/breadcrumbs"
import { UserMenu } from "~/features/dashboard/components/user-menu"
import { NotificationPopover } from "~/features/notifications/components/modals/notification-popover"
import { Separator } from "~/shared/components/ui/separator"
import { SidebarTrigger } from "~/shared/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
      <div className="flex h-5 w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2" />
        <Breadcrumbs />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <NotificationPopover />
        <UserMenu />
      </div>
    </header>
  )
}
