import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import GradientLoader from "../../common/GradientLoader";
import { cn } from "../../../lib/utils";

import DefaultStyles from "./default-styles.module.css";
import { GenericType, TableRowProps } from "./types";

const renderLoaderCell = () => (
  <div className="flex size-full items-center justify-center">
    <GradientLoader />
  </div>
);

const TableRow = ({
  row,
  tableCols,
  selectedRows,
  handleRowSelect,
  customClasses,
  customStyles,
  selectConfigurations,
  onRowClick,
  onRowDoubleClick,
  isLoading,
}: TableRowProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(
    !!selectedRows?.some((r: GenericType) => r.uniqueId === row.uniqueId)
  );
  const rowRef = useRef<HTMLTableRowElement>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editingCell, setEditingCell] = useState<string | null>(null);

  useEffect(
    () =>
      setIsSelected(
        !!selectedRows?.some(
          (r: { uniqueId: any }) => r.uniqueId === row.uniqueId
        )
      ),
    [row.uniqueId, selectedRows]
  );

  const getCellValue = useCallback(
    (row: GenericType, accessor: keyof GenericType | string): any => {
      if (typeof accessor === "string") {
        return row[accessor as keyof GenericType] || null;
      }
      return row[accessor] || null;
    },
    []
  );

  const memoizedTableCols = useMemo(() => tableCols, [tableCols]);

  const toggleEditMode = useCallback((value: boolean) => {
    setEditMode(value);
    if (!value) {
      setEditingCell(null);
    }
  }, []);

  const handleCellEdit = useCallback((accessor: string) => {
    setEditingCell(accessor);
  }, []);

  return (
    <tr
      ref={rowRef}
      data-row-uniqueId={row?.uniqueId || ""}
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
        if (onRowClick) onRowClick(e, row);
      }}
      onDoubleClick={e => {
        e.preventDefault();
        e.stopPropagation();
        if (onRowDoubleClick) onRowDoubleClick(e, row);
      }}
      className={cn(
        "group relative cursor-pointer !select-none bg-transparent font-hankenGrotesk hover:bg-grey-50",
        customClasses?.row || "",
        {
          "!bg-primary-300/15 before:absolute before:left-0 before:h-full before:w-[2px] before:bg-primary-300 before:bg-transparent":
            isSelected,
          "!bg-[#F5F6F7] !text-[#3A3D42]": editMode,
          "bg-primary-300/15 hover:bg-primary-300/15": (row as any)?.isClicked,
        }
      )}
      style={{
        ...(customStyles?.row || {}),
        ...(selectConfigurations?.highlightColor && isSelected
          ? { backgroundColor: selectConfigurations.highlightColor }
          : {}),
      }}
    >
      {memoizedTableCols.map((column: any, colIndex: any) => (
        <React.Fragment key={`tbl_row_col_${colIndex}`}>
          {selectConfigurations?.isEnabled && colIndex === 0 && (
            <td
              className={cn(
                "h-full !font-hankenGrotesk !text-dark-300/30",
                `${DefaultStyles.cell || ""} items-center p-2`,
                customClasses?.cell || "",
                { "!text-primary-300": isSelected },
                "!w-full"
              )}
              style={{
                ...(customStyles?.cell || {}),
                display: "flex",
                justifyContent: "center",
              }}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                handleRowSelect(row);
              }}
            >
              {isSelected
                ? selectConfigurations.markedIcon
                : selectConfigurations.unmarkedIcon}
            </td>
          )}
          <td
            className={cn(
              "relative !font-hankenGrotesk font-normal !text-dark-200",
              `${DefaultStyles.cell || ""} p-2`,
              customClasses?.cell || "",
              {
                "!text-primary-300": isSelected || (row as any)?.isClicked,
                "!text-[#3A3D42] hover:!text-[#3A3D42]": editMode,
              }
            )}
            style={customStyles?.cell || {}}
          >
            {isLoading
              ? renderLoaderCell()
              : (column.customCell
                  ? column.customCell(
                      getCellValue(row, column.accessor),
                      row,
                      editMode,
                      toggleEditMode,
                      undefined, // Remove setRowData prop
                      editingCell === column.accessor,
                      () => handleCellEdit(column.accessor)
                    )
                  : String(getCellValue(row, column.accessor))) || "-"}
          </td>
        </React.Fragment>
      ))}
    </tr>
  );
};

export default React.memo(TableRow);
