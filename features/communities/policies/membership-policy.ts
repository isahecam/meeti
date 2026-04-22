import { User } from "better-auth"

import { SelectCommunity } from "~/features/communities/types/community-types"

export class MembershipPolicy {
  static canJoin(user: User, community: SelectCommunity, isMember: boolean) {
    if (isMember) return false

    if (community.createdBy === user.id) return false

    return true
  }

  static canLeave(user: User, community: SelectCommunity, isMember: boolean) {
    if (community.createdBy === user.id) return false

    return isMember
  }
}
