import { Card } from "~/shared/components/ui/card"
import { Skeleton } from "~/shared/components/ui/skeleton"

export function UserCommunitiesListSkeleton() {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i} className="contents">
          <Card className="flex flex-row items-center gap-4 p-4">
            <Skeleton className="h-25 w-50 shrink-0 rounded-md" />

            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </Card>
        </li>
      ))}
    </ul>
  )
}
