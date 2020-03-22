export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  email: string;
  public_repos: number;
  followers: number;
  following: number;
}
  
export const createDefaultUser = () => ({
  id: -1,
  login: '',
  avatar_url: '',
  html_url: '',
  name: '',
  company: '',
  email: '',
  public_repos: -1,
  followers: -1,
  following: -1,
});