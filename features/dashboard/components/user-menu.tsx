"use client"

import { LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { toast } from "sonner"

import { USER_MENU_ITEMS } from "~/features/dashboard/constants/user-menu-items"
import { signOut, useSession } from "~/lib/auth-client"
import { Avatar, AvatarFallback, AvatarImage } from "~/shared/components/ui/avatar"
import { Button } from "~/shared/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/shared/components/ui/dropdown-menu"
import { Skeleton } from "~/shared/components/ui/skeleton"
import { Spinner } from "~/shared/components/ui/spinner"
import { getUserInitials } from "~/shared/utils/get-user-initials"

export function UserMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [state, startTransition] = useTransition()

  const handleSignOut = () => {
    startTransition(async () => {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Tu sesión ha sido cerrada correctamente")
            router.push("/auth/login")
          },
          onError: () => {
            setOpen(false)
            toast.error("Hubo un error al cerrar sesión")
          },
        },
      })
    })
  }

  const { data, isPending } = useSession()

  if (isPending) return <Skeleton className="size-10 rounded-full" />

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="rounded-full">
          <Avatar>
            {data?.user.image ? (
              <AvatarImage src={data.user.image} />
            ) : (
              <AvatarFallback>{getUserInitials(data?.user?.name ?? "")}</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
          {USER_MENU_ITEMS.map((item) => (
            <DropdownMenuItem key={item.title} asChild>
              <Link href={item.url}>
                {item.icon && <item.icon />}
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleSignOut} disabled={state}>
            {state ? (
              <>
                <Spinner data-icon="inline-start" />
                Cerrando sesión...
              </>
            ) : (
              <>
                <LogOut />
                Cerrar Sesión
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
