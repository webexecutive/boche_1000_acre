import { useState, useEffect, useRef } from "react";

/**
 * Delays mounting its children until the wrapper scrolls near the viewport.
 * Reserves `minHeight` space up front to avoid layout shift while waiting.
 */
function LazyMount({ children, rootMargin = "300px", minHeight = "400px" }) {
  const [shouldMount, setShouldMount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (shouldMount) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldMount, rootMargin]);

  return (
    <div ref={ref} style={shouldMount ? undefined : { minHeight }}>
      {shouldMount ? children : null}
    </div>
  );
}

export default LazyMount;