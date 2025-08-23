import { fetchAPI } from "../utils/fetch.ts";
import { environment } from "../constans/environments.ts";
import { getLocalStorage } from "../utils/storage.ts";

export const getAddresses = async (id: string) => {
  return fetchAPI(`${environment.API_URL}/contacts/${id}/addresses/`, {
    method: "GET",
    headers: {
      Authorization: getLocalStorage("token"),
    },
  }).then((res) => res.data);
};
