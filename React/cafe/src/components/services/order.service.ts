import { fetchAPI } from "../utils/fetch.ts";
import { getLocalStorage } from "../utils/storage.ts";
import { environment } from "../../constants/environment.ts";
import type { ICart, IOrder } from "../types/order.ts";

export const getOrders = async (
  page?: string,
  pageSize?: string,
  search?: string,
  status?: string,
  sortBy?: string,
  sortOrder?: string,
) => {
  let url = `${environment.API_URL}/orders`;
  if (page) url += `?page=${page}`;
  if (pageSize) url += `&pageSize=${pageSize}`;
  if (search) url += `&search=${search}`;
  if (status) url += `&status=${status}`;
  if (sortBy) url += `&sortBy=${sortBy}`;
  if (sortOrder) url += `&sortOrder=${sortOrder}`;

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

export const getOrderDetail = async (id: string) => {
  return await fetchAPI(`${environment.API_URL}/orders/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
  });
};

export const createOrder = async (payload: {
  customerName: string;
  tableNumber: number;
  cart: ICart[];
}) => {
  return await fetchAPI(`${environment.API_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
    body: JSON.stringify(payload),
  });
};
