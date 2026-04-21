import { Badge } from "~/shared/components/ui/badge"

interface Props {
  count: number
}

export function NotificationCount({ count }: Props) {
  return (
    <Badge variant="outline" className="absolute -top-1.5 -right-1.5 tabular-nums">
      {count}
    </Badge>
  )
}
