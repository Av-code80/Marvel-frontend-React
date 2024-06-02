import { useRef, useEffect } from 'react';

/**
 * Custom hook to manage & control concurrent requests
 * @returns {() => AbortSignal} - returns AbortSignal for current request
 */
const useConcurrencyController = () => {
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  const getSignal = () => {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();
    return controllerRef.current.signal;
  };

  return getSignal;
};

export default useConcurrencyController;
