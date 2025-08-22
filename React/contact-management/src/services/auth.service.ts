import { fetchAPI } from "../utils/fetch.ts";
import { environment } from "../constans/environments.ts";

export const login = async (payload: {
  username: string;
  password: string;
}) => {
  return fetchAPI(`${environment.API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const register = async (payload: {
  username: string;
  password: string;
  name: string;
}) => {
  return fetchAPI(`${environment.API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
