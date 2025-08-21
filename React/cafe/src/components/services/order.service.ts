import { fetchAPI } from "../utils/fetch.ts";
import { getLocalStorage } from "../utils/storage.ts";
import { environment } from "../../constants/environment.ts";

export const getOrders = async (
  page?: string,
  pageSize?: string,
  search?: string,
  status?: string,
  sortBy?: string,
  sortOrder?: string,
) => {
  let url = `${environment.API_URL}/orders`;
  if (page) url.concat(`?page=${page}`);
  if (pageSize) url.concat(`&pageSize=${pageSize}`);
  if (search) url.concat(`&search=${search}`);
  if (status) url.concat(`&status=${status}`);
  if (sortBy) url.concat(`&sortBy=${sortBy}`);
  if (sortOrder) url.concat(`&sortOrder=${sortOrder}`);

  return await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
  });
};

export const updateOrderStatus = async (
  id: string,
  payload: { status: string },
) => {
  return await fetchAPI(`${environment.API_URL}/orders/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
    body: JSON.stringify(payload),
  });
};
