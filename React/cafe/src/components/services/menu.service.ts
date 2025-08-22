import { environment } from "../../constants/environment.ts";
import { fetchAPI } from "../utils/fetch.ts";
import { getLocalStorage } from "../utils/storage.ts";

export const getMenu = async (
  category?: string,
  page?: string,
  pageSize?: string,
  search?: string,
  sortBy?: string,
  sortOrder?: string,
) => {
  let url = `${environment.API_URL}/menu`;
  if (category) url += `?category=${category}`;
  if (page) url += `?page=${page}`;
  if (pageSize) url += `&pageSize=${pageSize}`;
  if (search) url += `&search=${search}`;
  if (sortBy) url += `&sortBy=${sortBy}`;
  if (sortOrder) url += `&sortOrder=${sortOrder}`;

  return await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
  });
};
