import { EllipsisVerticalIcon, PencilIcon, TrashIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

import { SelectCommunity } from "~/features/communities/types/community-types"
import { Button } from "~/shared/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/shared/components/ui/dropdown-menu"

export interface Props {
  community: SelectCommunity
}

export function CommunityDropdownMenu({ community }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <EllipsisVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/communities/${community.id}/edit`}>
              <PencilIcon />
              Editar
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UsersIcon />
            Ver miembros
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
