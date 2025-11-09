import axios, { AxiosError } from "axios";

const envBaseUrl: string | undefined = import.meta.env.VITE_BACKEND_URL
const baseUrl: string | undefined = envBaseUrl;

export async function createUser(name: string, username: string, shortDesc: string, email: string, password: string) {
  return axios.post(
    `${baseUrl}/api/user/create`,
    {
      "email": email,
      "name": name,
      "password": password,
      "username": username,
      "shortDesc": shortDesc
    }
  ).then((response) => {
    return response.data
  }).catch(e => { throw new AxiosError(e) })
}