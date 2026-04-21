import { Bell } from "lucide-react"

import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "~/shared/components/ui/empty"

export function NotificationEmpty() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bell />
        </EmptyMedia>
        <EmptyTitle>Sin notificaciones</EmptyTitle>
        <EmptyDescription className="text-pretty">Te avisaremos cuando haya algo nuevo.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
