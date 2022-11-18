const storage = window.localStorage;

const getData = (key) => {
  if (!storage) return;
  try {
    return JSON.parse(storage.get(key) || "{}");
  } catch {
    return {};
  }
};

const setData = (key, data) => {
  if (!storage) return;
  return storage.set(key, JSON.stringify(data));
};

export { getData, setData };
