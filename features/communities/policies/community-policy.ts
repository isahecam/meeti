import { User } from "better-auth"

import { SelectCommunity } from "~/features/communities/types/community-types"

export class CommunityPolicy {
  static isAdmin(community: SelectCommunity, user: User) {
    return community.createdBy === user.id
  }

  static canEdit(community: SelectCommunity, user: User) {
    return this.isAdmin(community, user)
  }

  static canDelete(community: SelectCommunity, user: User) {
    return this.isAdmin(community, user)
  }

  static canViewMembers(community: SelectCommunity, user: User) {
    return this.isAdmin(community, user)
  }
}
