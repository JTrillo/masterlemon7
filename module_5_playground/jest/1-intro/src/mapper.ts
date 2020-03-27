import * as apiModel from './api-model';
import * as viewModel from './view-model';

export const mapMemberListFromApiToVM = (
  members: apiModel.Member[]
): viewModel.Member[] => {
  return Array.isArray(members)
    ? members.map(member => mapMemberFromApiToVM(member))
    : [];
};

const mapMemberFromApiToVM = (member: apiModel.Member): viewModel.Member => ({
  id: member.id.toString(),
  login: member.login,
  avatarUrl: member.avatar_url,
});