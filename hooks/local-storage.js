import {useState} from "react";

export const useLocalStorage = (key) => {
  const getInitialValue = () => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };
  const [value, setValue] = useState(getInitialValue);
  const setValuePersistently = (newValue) => {
    setValue(newValue);
    try {
      localStorage.setItem(key, newValue);
    } catch {}
  };
  return [value, setValuePersistently];
};
