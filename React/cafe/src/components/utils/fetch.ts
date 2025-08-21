export const fetchAPI = async (url: string, options: RequestInit) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  return await response.json();
};
