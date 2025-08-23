import { environment } from "../constans/environments.ts";
import { fetchAPI } from "../utils/fetch.ts";
import { getLocalStorage } from "../utils/storage.ts";

export const getContacts = async (
  name?: string,
  email?: string,
  phone?: string,
  page?: string,
  size?: string,
) => {
  const link = new URL(`${environment.API_URL}/contacts`);

  if (name) link.searchParams.append("name", name);
  if (email) link.searchParams.append("email", email);
  if (phone) link.searchParams.append("phone", phone);
  if (page) link.searchParams.append("page", page);
  if (size) link.searchParams.append("size", size);

  return await fetchAPI(link, {
    method: "GET",
    headers: {
      Authorization: getLocalStorage("token"),
    },
  });
};

export const createContact = async (payload: Record<string, string>) => {
  return await fetchAPI(`${environment.API_URL}/contacts`, {
    method: "POST",
    headers: {
      Authorization: getLocalStorage("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const deleteContact = async (id: string) => {
  return await fetchAPI(`${environment.API_URL}/contacts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: getLocalStorage("token"),
    },
  });
};

export const updateContact = async (
  id: string,
  payload: Record<string, string>,
) => {
  return await fetchAPI(`${environment.API_URL}/contacts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: getLocalStorage("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const getContactById = async (id: string) => {
  return await fetchAPI(`${environment.API_URL}/contacts/${id}`, {
    method: "GET",
    headers: {
      Authorization: getLocalStorage("token"),
    },
  }).then((res) => res.data);
};
