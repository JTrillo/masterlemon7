import { Member } from "../../../model/member";

export const filterMembersByCommaSeparatedText = (members: Member[], searchText: string): Member[] => {
  const searchedMembers = getSearchedMemberList(searchText);

  return searchText === '' ? members : filterMembersBySearchedMemberList(members, searchedMembers);
};

const getSearchedMemberList = (searchText: string): string[] => {
  const aux = searchText.split(",").map(t => t.trim()); //remove leading and trailing white spaces
  return aux;
};

const filterMembersBySearchedMemberList = (members: Member[], searchedMembers: string[]): Member[] => {
  return members.filter((member: Member) => {
    return matchAllSearchedMembers(member.login, searchedMembers);
  });
};

const matchAllSearchedMembers = (memberLogin: string, searchedMembers: string[]): boolean => {
  return searchedMembers.some(searchedMember => {
    return matchMember(memberLogin, searchedMember);
  });
}

const matchMember = (memberLogin: string, searchedMember: string): boolean => {
  const memberLoginLC = memberLogin.toLowerCase();
  const searchedMemberLC = searchedMember.toLowerCase();

  return memberLoginLC.indexOf(searchedMemberLC) >= 0;
}