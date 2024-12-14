import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    function setInitialValue() {
      try {
        const item =
          typeof window !== "undefined" ? localStorage.getItem(key) : null;
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error({ error, message: "Could not access LocalStorage", key });
      }
    }

    setInitialValue();
  }, [key, initialValue]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      setStoredValue(newValue);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error({
        error,
        message: "Could not set LocalStorage value",
        key,
      });
    }
  };

  return [storedValue, setValue] as const;
}
