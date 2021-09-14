import { useEffect, useRef } from 'react';

const useEventListener = (event, callback, element = window) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element && element.addEventListener) {
      const eventListener = (e) => callbackRef.current(e);

      element.addEventListener(event, eventListener);

      return () => {
        element.removeEventListener(event, eventListener);
      };
    }
  }, [event, element]);
};

export { useEventListener as default };
