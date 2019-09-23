import React, { useState, useEffect } from 'react';

// Custom hook replacing loadash lol
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler); //clear setTimeout
    };
  }, [delay, value]);

  return debouncedValue;
}
