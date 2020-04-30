import { useState, useEffect } from 'react';

export function useTimingToggle(
  initial,
  duration,
  canceled
) {
  const [state, setState] = useState(initial);
  useEffect(() => {
    let timer = 0;
    if (!canceled && duration != null && duration > 0) {
      timer = window.setTimeout(() => setState(!state), duration);
    }
    return () => window.clearTimeout(timer);
  }, [duration, canceled, state]);
  return state;
}
