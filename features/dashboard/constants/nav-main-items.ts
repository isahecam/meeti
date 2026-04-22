import { Bell, Folder, Home, Users } from "lucide-react"

import { NavItem } from "~/features/dashboard/types/dashboard-types"

export const NAV_MAIN_ITEMS = [
  {
    title: "Panel de Administración",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Comunidades",
    url: "/dashboard/communities",
    icon: Users,
  },
  {
    title: "Meetis",
    url: "#",
    icon: Folder,
  },
  {
    title: "Notificaciones",
    url: "#",
    icon: Bell,
  },
] satisfies NavItem[]
