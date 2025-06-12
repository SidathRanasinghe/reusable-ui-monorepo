import { FilterState } from "../../KnowledgeFabricWidgetContext";
import { SearchIndex } from "../../types";

/**
 * Returns the background color class based on color property
 */
export const getColorClass = (color?: string): string => {
  switch (color) {
    case "green":
      return "bg-green-100 text-green-600";
    case "red":
      return "bg-red-100 text-red-600";
    case "blue":
      return "bg-blue-100 text-blue-600";
    case "orange":
      return "bg-orange-100 text-orange-600";
    case "cyan":
      return "bg-cyan-100 text-cyan-600";
    case "yellow":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const getRandomColor = (): "green" | "red" | "blue" | "orange" | "cyan" | "yellow" => {
  const colors: ("green" | "red" | "blue" | "orange" | "cyan" | "yellow")[] = [
    "green",
    "red",
    "blue",
    "orange",
    "cyan",
    "yellow",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const extractTimeRangeTimeStamps = (timeValue: any, defaultValue: string = "7d") => {
  switch (timeValue) {
    case "1d":
      return {
        startTs: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
        endTs: Date.now(),
      };
    case "3d":
      return {
        startTs: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
        endTs: Date.now(),
      };
    case "7d":
      return {
        startTs: Date.now() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
        endTs: Date.now(),
      };
    case "14d":
      return {
        startTs: Date.now() - 14 * 24 * 60 * 60 * 1000, // 14 days ago
        endTs: Date.now(),
      };
    case "30d":
      return {
        startTs: Date.now() - 30 * 24 * 60 * 60 * 1000, // 30 days ago
        endTs: Date.now(),
      };
    case "60d":
      return {
        startTs: Date.now() - 60 * 24 * 60 * 60 * 1000, // 60 days ago
        endTs: Date.now(),
      };
    case "custom":
      if (typeof timeValue === "object" && timeValue.customRange) {
        return {
          startTs: new Date(timeValue.fromDate).getTime(), // Convert fromDate to timestamp
          endTs: new Date(timeValue.toDate).getTime(), // Convert toDate to timestamp
        };
      }
      return {
        startTs: 0, // Fallback case if customRange is not properly provided
        endTs: Date.now(),
      };
    default: // By default 7d
      return {
        startTs: Date.now() - Number(defaultValue.split("d")?.[0] || "7") * 24 * 60 * 60 * 1000,
        endTs: Date.now(),
      };
  }
};

// Helper function to build Elasticsearch query from filters
export const buildQueryFromFilters = (
  currentFilters: FilterState,
  searchTerm: string,
  currentSortBy: string,
  currentSortOrder: "asc" | "desc",
  index: SearchIndex = "dataAsset"
) => {
  // Field mappings for OpenMetadata
  const fieldMappings: Record<string, string> = {
    data_assets: "entityType",
    domain: "domain.displayName.keyword",
    tier: "tier.tagFQN",
    tags: "tags.tagFQN",
    owners: "owners.displayName.keyword",
    service: "service.displayName.keyword",
    service_type: "serviceType",
    certification: "certification.tagLabel.tagFQN",
    schema: "databaseSchema.displayName",
  };

  // Base query structure
  const queryObject: any = {
    query: {
      bool: {
        must: [],
      },
    },
  };

  // Add filters for each category
  Object.entries(currentFilters).forEach(([category, values]) => {
    if (values.length === 0) return; // Skip empty filters

    const fieldName = fieldMappings[category];
    if (!fieldName) return; // Skip if no field mapping

    const shouldClauses = values.map(value => ({
      term: { [fieldName]: value },
    }));

    queryObject.query.bool.must.push({
      bool: {
        should: shouldClauses,
      },
    });
  });

  // Construct the full query params
  return searchTerm
    ? {
        q: searchTerm,
        index: index || "all",
        query_filter: queryObject,
        sort_field: "_score",
        sort_order: currentSortOrder,
      }
    : {
        index,
        query_filter: queryObject,
        sort_field: currentSortBy,
        sort_order: currentSortOrder,
      };
};
