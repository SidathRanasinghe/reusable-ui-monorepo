import { generateUniqueId } from "../../../lib/utils";

import { Column } from "./types";

/**
 * Generates mock data for CustomTable based on column definitions
 * @param columns Array of column definitions
 * @param count Number of mock rows to generate
 * @returns Array of mock data objects conforming to the column structure
 */
export const getMockData = <T extends Record<string, any>>(
  columns: Column<T>[],
  count: number = 10
): T[] => {
  const mockDataArray: T[] = [];
  for (let i = 0; i < count; i++) {
    const mockItem = {} as any;
    // Populate data for each column
    columns.forEach(column => {
      const accessor = column.accessor as string;
      // Skip if the column is not visible
      if (column.visible === false) return;
      mockItem[accessor] = "";
    });
    // Add a unique ID if not already present
    mockItem["id" as keyof T] = generateUniqueId() as any;
    mockDataArray.push(mockItem);
  }

  return mockDataArray;
};
