import { useState, useEffect } from 'react';

export function useCreated(ref) {
  const [created, setCreated] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (node && !created) setCreated(true);
  }, [ref, created]);
  return created;
}
