import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorage] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );
  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(localStorageValue) : value
    setLocalStorage(value)
    localStorage.setItem(key, JSON.stringify(valueToStore))
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromList = localStorage.getItem(key);
  return itemFromList ? JSON.parse(itemFromList) : initialValue;
}

export default useLocalStorage;
