import { User, createDefaultUser } from "../model/user";

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveUser = (data: any): Promise<User> => {
  const user: User = createDefaultUser();

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
};

export const getUser = (userLogin: string): Promise<User> => {
  const gitHubMembersUrl: string = `https://api.github.com/users/${userLogin}`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveUser(data));
};