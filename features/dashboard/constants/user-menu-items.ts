import { Pencil, Shield, User } from "lucide-react"

import { NavItem } from "~/features/dashboard/types/dashboard-types"

export const USER_MENU_ITEMS = [
  {
    title: "Ver Perfil",
    url: "#",
    icon: User,
  },
  {
    title: "Administrar Perfil",
    url: "#",
    icon: Pencil,
  },
  {
    title: "Seguridad",
    url: "#",
    icon: Shield,
  },
] satisfies NavItem[]
