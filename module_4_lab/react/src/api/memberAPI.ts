import {MemberEntity, createDefaultMemberEntity } from '../model/member';
import { UserEntity, createDefaultUserEntity } from "../model/user";
class MemberAPI {

  // Just return a copy of the mock data
  getAllMembers(organizationName : string) : Promise<MemberEntity[]> {
    const gitHubMembersUrl : string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
    .then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response))
    .then((data) => this.resolveMembers(data))
  }

  getMember(userLogin: string) : Promise<UserEntity> {
    const githubUsersUrl: string = `https://api.github.com/users/${userLogin}`;

    return fetch(githubUsersUrl)
    .then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response))
    .then((data) => this.resolveUser(data))
  }

  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response : Response) : any {
    return response.json();
  }

  private resolveMembers (data : any) : Promise<MemberEntity[]> {

    const members = data.map((gitHubMember) => {
      var member : MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });


    return Promise.resolve(members);
  }

  private resolveUser (data: any) : Promise<UserEntity> {
    const user: UserEntity = createDefaultUserEntity();

    user.id = data.id;
    user.login = data.login;
    user.avatar_url = data.avatar_url;
    user.html_url = data.html_url;
    user.name = data.name;
    user.company = data.company !== null ? data.company : 'N/A';
    user.email = data.email !== null ? data.email : 'N/A';
    user.public_repos = data.public_repos;
    user.followers = data.followers;
    user.following = data.following;

    return Promise.resolve(user);
  }
}

export const memberAPI = new MemberAPI();
