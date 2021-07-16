import { useState, useEffect, useCallback, useRef } from 'react';

export default function useStateCallback(initialState) {
  const [state, setState] = useState(initialState);
  const callbackRef = useRef(null);

  const setStateCallback = useCallback((state, callback) => {
    callbackRef.current = callback;
    setState(state);
  }, []);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);

      callbackRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback];
}
