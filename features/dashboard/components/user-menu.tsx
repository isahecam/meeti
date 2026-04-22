"use client"

import { LogOut, Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, useState, useTransition } from "react"
import { toast } from "sonner"

import { USER_MENU_ITEMS } from "~/features/dashboard/constants/user-menu-items"
import { signOut } from "~/lib/auth-client"
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
import { Spinner } from "~/shared/components/ui/spinner"

export function UserMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleOpenChange = useCallback((value: boolean) => !isPending && setOpen(value), [isPending])

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

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
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
          <DropdownMenuItem onClick={handleSignOut} disabled={isPending}>
            {isPending ? (
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
