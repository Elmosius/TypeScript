import { fetchAPI } from "../utils/fetch.ts";
import { environment } from "../constans/environments.ts";
import { getLocalStorage } from "../utils/storage.ts";

export const login = async (payload: {
  username: string;
  password: string;
}) => {
  return fetchAPI(`${environment.API_URL}/users/login`, {
    headers: {
      "Content-Type": "application/json",
    },
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
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const updateUsername = async (name: string) => {
  return fetchAPI(`${environment.API_URL}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: getLocalStorage("token"),
    },
    body: JSON.stringify({ name: name }),
  });
};

export const updatePassword = async (password: string) => {
  return fetchAPI(`${environment.API_URL}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: getLocalStorage("token"),
    },
    body: JSON.stringify({ password: password }),
  });
};

export const getCurrentUser = async () => {
  return fetchAPI(`${environment.API_URL}/users/current`, {
    method: "GET",
    headers: {
      Authorization: getLocalStorage("token"),
    },
  }).then((res) => res.data);
};

export const logout = async () => {
  return fetchAPI(`${environment.API_URL}/users/logout`, {
    method: "POST",
    headers: {
      Authorization: getLocalStorage("token"),
    },
  });
};
