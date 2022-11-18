const storage = window.localStorage;

const getStorageItem = (key, defaultItem = {}) => {
  if (!storage) return;
  try {
    return JSON.parse(storage.getItem(key) || "null") || defaultItem;
  } catch {
    return defaultItem;
  }
};

const setStorageItem = (key, item) => {
  if (!storage) return;
  return storage.setItem(key, JSON.stringify(item));
};

export { getStorageItem, setStorageItem };
