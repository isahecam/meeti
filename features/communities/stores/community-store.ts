import { create } from "zustand"

import { SelectCommunity } from "~/features/communities/types/community-types"

interface CommunityStore {
  open: boolean
  setOpen: (open: boolean) => void
  community: SelectCommunity | null
  setCommunity: (community: SelectCommunity | null) => void
}

export const useCommunityStore = create<CommunityStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),

  community: null,
  setCommunity: (community) => set({ community }),
}))
