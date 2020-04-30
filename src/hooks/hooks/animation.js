import { useState, useEffect} from 'react'

export function useAnimation (visibility, nodeRef, animationEnd,isTransition) {
  const anim = visibility ? 'enter' : 'leave'
  const [animation, setAnimation] = useState(anim)
  
  useEffect(() => {
    const node = nodeRef.current;
    const event = isTransition ? 'transitionend' : 'animationend';
    const handleEvent = (e) => {
      if (e.target !== node) return;
      if (!visibility && animation) setAnimation(null);
      animationEnd && animationEnd();
    };
    if (node) {
      if (animation !== anim) setAnimation(anim);
      node.addEventListener(event, handleEvent, false);
    }
    return () => {
      node && node.removeEventListener(event, handleEvent);
    };
  }, [anim, animation, animationEnd, isTransition, nodeRef, visibility]);
  return animation
}