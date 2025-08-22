const storage = typeof window !== "undefined" ? window.localStorage : null;

const getLocalStorage = (key: string) =>
  JSON.parse(storage?.getItem(key) || "null");

const setLocalStorage = (key: string, value: any) =>
  storage?.setItem(key, JSON.stringify(value));

const removeLocalStorage = (key: string) => storage?.removeItem(key);

export { getLocalStorage, setLocalStorage, removeLocalStorage };
