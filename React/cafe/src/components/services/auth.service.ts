import { fetchAPI } from "../utils/fetch.ts";
import { environment } from "../../constants/environment.ts";

export const login = async (payload: { email: string; password: string }) => {
  return await fetchAPI(`${environment.API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
