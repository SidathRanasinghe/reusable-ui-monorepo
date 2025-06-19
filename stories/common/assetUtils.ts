/**
 * Get the correct asset path for both development and production
 * @param path - The asset path (e.g., "/images/moutain_landscape.jpeg")
 * @returns The correct full path for the current environment
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // In development, __ASSET_BASE_PATH__ will be empty string
  // In production, it will be "/reusable-ui-monorepo"
  const basePath =
    typeof __ASSET_BASE_PATH__ !== "undefined" ? __ASSET_BASE_PATH__ : "";

  return `${basePath}/${cleanPath}`;
};

// Predefined asset paths for common images
export const ASSET_PATHS = {
  MOUNTAIN_LANDSCAPE: "/images/moutain_landscape.jpeg",
  DESERT_SUNSET: "/images/desert_sunset.jpg",
  FOREST_PATH: "/images/forest_path.jpeg",
  OCEAN_WAVES: "/images/ocean_waves.jpg",
  COMPUTER_MOUSE: "/images/computer_mouse.jpeg",
  DESK_ORGANIZER: "/images/desk_organizer.jpeg",
  SMART_WATCH: "/images/smart_watch.jpeg",
  WIRELESS_HEADPHONES: "/images/wireless_headphones.jpeg",
  NETFLIX_THUMBNAIL: "/images/netflix_thumbnail.jpeg",
  MIKE_CHEN: "/images/mike_chen.jpeg",
  SARAH_JOHNSON: "/images/sarah_johnson.jpeg",
} as const;
