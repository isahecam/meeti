"use client"

import { EllipsisVerticalIcon, PencilIcon, TrashIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

import { useCommunityStore } from "~/features/communities/stores/community-store"
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

interface Props {
  community: SelectCommunity
}

export function CommunityDropdownMenu({ community }: Props) {
  const { setOpen, setCommunity } = useCommunityStore()

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
          <DropdownMenuItem
            variant="destructive"
            onSelect={() => {
              setCommunity(community)
              setOpen(true)
            }}>
            <TrashIcon />
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
