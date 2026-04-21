import { Bell } from "lucide-react"

import { NotificationCount } from "~/features/notifications/components/primitives/notification-count"
import { NotificationEmpty } from "~/features/notifications/components/primitives/notification-empty"
import { Button } from "~/shared/components/ui/button"
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "~/shared/components/ui/popover"

export function NotificationPopover() {
  const totalNotifications = 0

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell />
          {totalNotifications > 0 && <NotificationCount count={totalNotifications} />}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        {totalNotifications > 0 ? (
          <PopoverHeader className="flex-row">
            <PopoverTitle>Mis Notificaciones</PopoverTitle>
          </PopoverHeader>
        ) : (
          <NotificationEmpty />
        )}
      </PopoverContent>
    </Popover>
  )
}
