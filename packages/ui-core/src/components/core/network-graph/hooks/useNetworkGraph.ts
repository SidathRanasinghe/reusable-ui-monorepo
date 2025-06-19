import { useEffect, useState, useCallback } from "react";

import { Dimensions, UseNetworkGraphReturn } from "../types";
import { debounce, getResponsiveDimensions } from "../utils";

interface UseNetworkGraphProps {
  containerRef: React.RefObject<HTMLElement>;
  width?: number;
  height?: number;
  aspectRatio?: number;
}

export const useNetworkGraph = ({
  containerRef,
  width,
  height,
  aspectRatio = 16 / 9,
}: UseNetworkGraphProps): UseNetworkGraphReturn => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: width || 800,
    height: height || 600,
  });

  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;

    if (width && height) {
      // Use provided dimensions
      setDimensions({ width, height });
    } else {
      // Calculate responsive dimensions
      const responsiveDims = getResponsiveDimensions(
        containerRef.current,
        aspectRatio
      );
      setDimensions(responsiveDims);
    }
  }, [containerRef, width, height, aspectRatio]);

  // Debounced version for resize events
  const debouncedUpdateDimensions = useCallback(
    debounce(updateDimensions, 150),
    [updateDimensions]
  );

  useEffect(() => {
    updateDimensions();

    // Only set up resize observer if we don't have fixed dimensions
    if (!width || !height) {
      const resizeObserver = new ResizeObserver(debouncedUpdateDimensions);

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      // Also listen for window resize as fallback
      window.addEventListener("resize", debouncedUpdateDimensions);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", debouncedUpdateDimensions);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, containerRef]);

  return {
    dimensions,
    updateDimensions,
  };
};
