import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CSVLink } from "react-csv";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Check,
  FolderSearch,
  Minus,
} from "lucide-react";

import { cn, generateUniqueId } from "../../../lib/utils";
import { Icon } from "../../common/Icon";

import { Column, GenericType, SelectConfigs, TableProps } from "./types";
import CustomTableStyles from "./CustomTableStyles.module.css";
import Pagination from "./Pagination";
import TableRow from "./TableRow";
import { getMockData } from "./utils";

const CustomTable = ({
  data,
  columns,
  customStyles,
  customClasses,
  pagination,
  downloadOptions,
  title,
  subtitle,
  description,
  enabledActions,
  tableActions,
  enableFooterActions,
  footerActions,
  selectConfigs,
  CustomFilter,
  sortOptions,
  hoverRowOptions,
  tableId,
  isLoading,
  noDataConfigs,
  onRowSelect,
  onRowHover,
  onRowBlur,
  onRowClick,
  onRowDoubleClick,
}: TableProps) => {
  const [tableCols, setTableCols] = useState<Column<GenericType>[]>([]);
  const [selectedRows, setSelectedRows] = useState<GenericType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const selectConfigsRef = useRef<SelectConfigs<GenericType>>();
  const [tableData, setTableData] = useState<GenericType[]>([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    if (isLoading) {
      setTableData(
        getMockData(
          columns,
          pagination?.enabled ? pagination?.itemsPerPage : 10
        )
      );
    } else {
      setTableData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    setTableCols(columns);
  }, [columns]);

  useEffect(() => {
    selectConfigsRef.current = {
      isEnabled: !!selectConfigs?.isEnabled,
      highlightRow:
        // eslint-disable-next-line no-prototype-builtins
        selectConfigs && selectConfigs?.hasOwnProperty("highlightRow")
          ? !!selectConfigs?.highlightRow
          : true,
      markedIcon: selectConfigs?.markedIcon || (
        <div className="size-4 rounded border border-transparent bg-transparent">
          <Icon
            icon={Check}
            className="flex size-full items-center justify-center"
            iconClassName="stroke-[#2445FF] size-3 stroke-[3]"
          />
        </div>
      ),
      unmarkedIcon: selectConfigs?.unmarkedIcon || (
        <div className="size-4 rounded border border-[#9DA4AE] bg-transparent" />
      ),
      markedAllIcon: selectConfigs?.markedAllIcon || (
        <div className="size-4 rounded bg-[#2445FF]">
          <Icon
            icon={Check}
            className="flex size-full items-center justify-center"
            iconClassName="stroke-white size-3 stroke-[3]"
          />
        </div>
      ),
      unmarkedAllIcon: selectConfigs?.unmarkedAllIcon || (
        <div className="size-4 rounded bg-[#2445FF]">
          <Icon
            icon={Minus}
            className="flex size-full items-center justify-center"
            iconClassName="stroke-white size-3 stroke-[3]"
          />
        </div>
      ),
      highlightColor: selectConfigs?.highlightColor || "",
      selectedItems: selectConfigs?.selectedItems || [],
      tableId: selectConfigs?.tableId || "",
    };

    if (
      selectConfigs?.tableId === tableId &&
      selectedRows !== selectConfigs?.selectedItems &&
      selectConfigs?.selectedItems
    ) {
      setSelectedRows(() => [...(selectConfigs?.selectedItems || [])]);
    }
  }, [selectConfigs, selectedRows, tableId]);

  const itemsPerPage = pagination?.itemsPerPage || 10;

  const inferDataType = useCallback((value: any) => {
    if (typeof value === "string" && !isNaN(Date.parse(value))) {
      return "date";
    } else if (typeof value === "number") {
      return "number";
    } else if (typeof value === "string") {
      return "string";
    } else if (typeof value === "object" && value?.value) {
      return inferDataType(value.value);
    }
    return "unknown";
  }, []);

  const sortedData = useMemo(() => {
    const activeSortColumn = tableCols.find(
      col => col.options?.sortAsc || col.options?.sortDsc
    );
    if (!activeSortColumn) {
      return tableData;
    }
    const { accessor, options } = activeSortColumn;
    const { sortAsc, sortDsc } = options || {};
    const sampleValue = tableData.find(row => row[accessor] != null)?.[
      accessor
    ];
    const dataType = inferDataType(sampleValue);

    return [...tableData].sort((a, b) => {
      const valA = a[accessor];
      const valB = b[accessor];
      if (!valA && valA !== 0) return 1;
      if (!valB && valB !== 0) return -1;
      let compareResult;
      switch (dataType) {
        case "string":
          compareResult = String(valA).localeCompare(String(valB));
          break;
        case "number":
          compareResult = (valA as number) - (valB as number);
          break;
        case "date":
          compareResult =
            new Date(valA as string).getTime() -
            new Date(valB as string).getTime();
          break;
        default:
          compareResult = 0;
      }
      if (sortAsc) return compareResult;
      if (sortDsc) return -compareResult;
      return 0;
    });
  }, [tableData, tableCols, inferDataType]);

  const paginatedData = useMemo(() => {
    if (pagination?.enabled && pagination?.itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }
    return sortedData;
  }, [sortedData, pagination, currentPage, itemsPerPage]);

  useEffect(() => {
    if (hoverRowOptions?.isEnabled) {
      const newRefs: Record<string, React.RefObject<HTMLTableRowElement>> = {};
      paginatedData?.forEach((dt: GenericType, index: number) => {
        const refKey = `hover_card_ref_${index}`;
        newRefs[refKey] = React.createRef<HTMLTableRowElement>();
      });
    }
  }, [hoverRowOptions?.isEnabled, paginatedData]);

  const handleRowSelect = useCallback(
    (row: GenericType) => {
      setSelectedRows(prev => {
        const isSelected = prev.some(r => r.uniqueId === row.uniqueId);
        const newSelectedRows = isSelected
          ? prev.filter(r => r.uniqueId !== row.uniqueId)
          : [...prev, row];
        setIsAllSelected(newSelectedRows.length === paginatedData.length);
        if (onRowSelect) onRowSelect(newSelectedRows);
        return newSelectedRows;
      });
    },
    [paginatedData, onRowSelect]
  );

  const toggleSelectAll = useCallback(() => {
    setSelectedRows(prev => {
      const newSelectedRows =
        prev.length === paginatedData.length ? [] : [...paginatedData];
      setIsAllSelected(!isAllSelected);
      if (onRowSelect) onRowSelect(newSelectedRows);
      return newSelectedRows;
    });
  }, [paginatedData, isAllSelected, onRowSelect]);

  const handlePaginationChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const clickedToSort = useCallback(
    (column: Column<GenericType>) => {
      let sortDirection: "asc" | "desc" | null = null;
      setTableCols(prev =>
        prev.map(col => {
          if (column.accessor === col.accessor && col.options) {
            if (!col.options.sortAsc && !col.options.sortDsc) {
              sortDirection = "asc";
              return {
                ...col,
                options: { ...col.options, sortAsc: true, sortDsc: false },
              };
            } else {
              sortDirection = "desc";
              return {
                ...col,
                options: {
                  ...col.options,
                  sortAsc: !col.options.sortAsc,
                  sortDsc: !col.options.sortDsc,
                },
              };
            }
          } else if (col.accessor !== column.accessor && col.options) {
            return {
              ...col,
              options: { ...col.options, sortAsc: false, sortDsc: false },
            };
          }
          return col;
        })
      );
      if (sortDirection) {
        sortOptions?.handleSortByColumn?.(
          column.accessor.toString(),
          sortDirection
        );
      }
    },
    [sortOptions]
  );

  return (
    <div
      className={cn(
        `${CustomTableStyles.parentContainer || ""} rounded-6 flex size-full flex-col items-start justify-start`,
        customClasses?.parentContainer || ""
      )}
      style={customStyles?.parentContainer || {}}
    >
      {(title || subtitle || description) && (
        <div
          className={cn(
            `${CustomTableStyles.componentHeader || ""} mb-0 flex w-full flex-col items-start justify-start`,
            customClasses?.componentHeader || ""
          )}
          style={customStyles?.componentHeader || {}}
        >
          {title && (
            <div
              className={cn(
                `${CustomTableStyles.titleWraper || ""} flex w-full flex-row items-center justify-start`,
                customClasses?.titleWrapper || ""
              )}
              style={customStyles?.titleWrapper || {}}
            >
              {typeof title === "string" ? (
                <span
                  className={cn(
                    `${CustomTableStyles.title || ""} flex size-full flex-col items-start justify-start font-hankenGrotesk text-sm`,
                    customClasses?.title || ""
                  )}
                  style={customStyles?.title || {}}
                >
                  {title}
                </span>
              ) : (
                title
              )}
            </div>
          )}
          {subtitle && (
            <div
              className={cn(
                `${CustomTableStyles.subtitleWraper || ""} flex w-full flex-row items-center justify-start`,
                customClasses?.subtitleWraper || ""
              )}
              style={customStyles?.subtitleWraper || {}}
            >
              {typeof subtitle === "string" ? (
                <span
                  className={cn(
                    `${CustomTableStyles.subtitle || ""} flex size-full flex-col items-start justify-start font-hankenGrotesk`,
                    customClasses?.subtitle || ""
                  )}
                  style={customStyles?.subtitle || {}}
                >
                  {subtitle}
                </span>
              ) : (
                subtitle
              )}
            </div>
          )}
          {description && (
            <div
              className={cn(
                `${CustomTableStyles.descriptionWrapper || ""} flex w-full flex-row items-center justify-start`,
                customClasses?.descriptionWrapper || ""
              )}
              style={customStyles?.descriptionWrapper || {}}
            >
              {typeof description === "string" ? (
                <p
                  className={cn(
                    `${CustomTableStyles.description || ""} flex size-full flex-col items-start justify-start font-hankenGrotesk`,
                    customClasses?.description || ""
                  )}
                  style={customStyles?.description || {}}
                >
                  {description}
                </p>
              ) : (
                description
              )}
            </div>
          )}
        </div>
      )}
      {enabledActions && (
        <div
          className={cn(
            `${CustomTableStyles.tableActionsContainer || ""} flex w-full flex-row items-center justify-end`,
            customClasses?.tableActionsContainer || ""
          )}
          style={customStyles?.tableActionsContainer || {}}
        >
          {tableActions ||
            (downloadOptions?.enabled &&
              downloadOptions.formats.includes("csv") && (
                <div>
                  <CSVLink
                    data={tableData}
                    className="font-hankenGrotesk text-caption-xxs text-cadet-gray-8.5"
                  >
                    Download
                  </CSVLink>
                </div>
              ))}
        </div>
      )}

      {pagination?.enabled && pagination.verticalPosition === "top" && (
        <div
          className={cn(
            `${CustomTableStyles.pagination || ""} `,
            customClasses?.pagination ||
              `flex w-full flex-row items-center justify-${pagination.horizontalPosition || "start"}`
          )}
          style={customStyles?.pagination || {}}
        >
          {pagination.component
            ? pagination.component()
            : Math.ceil((tableData?.length || 0) / itemsPerPage) > 1 && (
                <Pagination
                  layout={"CUSTOM_TABLE"}
                  numberOfPages={Math.ceil(
                    (tableData?.length || 0) / itemsPerPage
                  )}
                  currentPage={currentPage}
                  setCurrentPage={handlePaginationChange}
                />
              )}
        </div>
      )}

      <div
        className={cn(
          "scrollbar",
          `${CustomTableStyles.tableContainer || ""}`,
          customClasses?.tableContainer || ""
        )}
        style={customStyles?.tableContainer || {}}
      >
        <table
          className={cn(
            `${CustomTableStyles.table || ""} !bg-transparent`,
            customClasses?.table || ""
          )}
          style={customStyles?.table || {}}
        >
          <thead
            className={cn(
              "!select-none",
              `${CustomTableStyles.tableHeader || ""} `,
              customClasses?.tableHeader || ""
            )}
            style={customStyles?.tableHeader || {}}
          >
            <tr
              className={cn(
                "rounded-[2px] bg-grey-100 font-hankenGrotesk !text-caption-xs font-medium",
                CustomTableStyles.headerRow || "",
                customClasses?.headerRow || ""
              )}
              style={customStyles?.headerRow || {}}
            >
              {selectConfigsRef.current?.isEnabled && (
                <th
                  key={"thchbx_all"}
                  onClick={toggleSelectAll}
                  className={cn(
                    "relative h-full !font-hankenGrotesk !text-dark-300/30",
                    CustomTableStyles.headerCell || "",
                    customClasses?.headerCell || "",
                    "!px-2 !py-1.5 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-transparent after:absolute after:right-0 after:h-[calc(100%-0.75rem)] after:w-px after:bg-cadet-gray-5",
                    { "before:bg-primary-300": !!selectedRows?.length }
                  )}
                  style={{
                    ...(customStyles?.headerCell || {}),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    cursor: "pointer",
                  }}
                >
                  {isAllSelected
                    ? selectConfigsRef.current.markedAllIcon ||
                      selectConfigsRef.current.markedIcon
                    : selectedRows?.length &&
                        selectedRows.length < paginatedData?.length
                      ? selectConfigsRef.current.unmarkedAllIcon
                      : selectConfigsRef.current.unmarkedIcon}
                </th>
              )}
              {tableCols.map((column, index) => (
                <th
                  key={`thd_${index}`}
                  className={cn(
                    "relative !py-1.5 px-0",
                    CustomTableStyles.headerCell || "",
                    customClasses?.headerCell || "",
                    column.className || "",
                    "after:absolute after:right-0 after:top-[0.375rem] after:h-[calc(100%-0.75rem)] after:w-px after:bg-cadet-gray-5",
                    { "after:w-0": index === tableCols.length - 1 }
                  )}
                  style={customStyles?.headerCell || {}}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: sortOptions?.enabled
                        ? "space-between"
                        : "center",
                      alignItems: "center",
                      ...(customStyles?.headerCell || {}),
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: sortOptions?.enabled
                          ? "space-between"
                          : "start",
                        alignItems: sortOptions?.enabled
                          ? "flex-start"
                          : "center",
                        ...(customStyles?.headerCell || {}),
                      }}
                      className={cn(
                        "px-3 font-hankenGrotesk !text-caption-xs font-medium leading-3",
                        { invisible: column.visible === false }
                      )}
                    >
                      {column.header || "-"}
                      {sortOptions?.enabled &&
                        column.header &&
                        column.options && (
                          <div className="float-left flex cursor-pointer items-center justify-end pl-4">
                            {column.options?.sortAsc && (
                              <Icon
                                icon={ArrowUp}
                                className="size-3"
                                onClick={() => {
                                  clickedToSort(column);
                                }}
                              />
                            )}
                            {column.options?.sortDsc && (
                              <Icon
                                icon={ArrowDown}
                                className="size-3 opacity-60"
                                onClick={() => {
                                  clickedToSort(column);
                                }}
                              />
                            )}
                            {!column.options?.sortAsc &&
                              !column.options?.sortDsc && (
                                <Icon
                                  icon={ArrowUpDown}
                                  className="size-3"
                                  onClick={() => {
                                    clickedToSort(column);
                                  }}
                                />
                              )}
                          </div>
                        )}
                    </div>
                  </div>
                  {CustomFilter && (
                    <div className="my-auto w-full pt-1.5">
                      <CustomFilter columData={column} />
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={cn(
              CustomTableStyles.tableBody || "",
              customClasses?.tableBody || ""
            )}
            style={customStyles?.tableBody || {}}
          >
            {paginatedData.map((row, index) => (
              <TableRow
                key={`${index}_${generateUniqueId()}`}
                row={row}
                tableCols={tableCols}
                index={index}
                selectedRows={selectedRows}
                handleRowSelect={handleRowSelect}
                customClasses={customClasses}
                customStyles={customStyles}
                selectConfigurations={selectConfigsRef.current}
                hoverRowOptions={hoverRowOptions}
                onRowHover={onRowHover}
                onRowBlur={onRowBlur}
                onRowClick={onRowClick}
                onRowDoubleClick={onRowDoubleClick}
                isLoading={isLoading}
              />
            ))}
          </tbody>
        </table>
        {!data?.length && !isLoading && noDataConfigs?.enabled && (
          <div className="flex size-full items-center justify-center rounded-b ring-1 ring-inset ring-cadet-gray-1">
            <div className="flex w-full flex-1 flex-col items-center justify-center gap-2 py-8">
              {noDataConfigs?.icon ? (
                noDataConfigs?.icon
              ) : (
                <div className={cn("rounded-md bg-grey-100/50 p-4")}>
                  <FolderSearch
                    className={cn("size-8 text-cadet-gray-9.5/40")}
                  />
                </div>
              )}
              <div className="flex w-full flex-col items-center justify-start gap-y-1">
                <p className="font-hankenGrotesk text-caption-xs text-muted-foreground">
                  {noDataConfigs?.messageTitle || "No data available."}
                </p>
                {noDataConfigs?.message && (
                  <p className="font-hankenGrotesk text-sub-caption-xs text-muted-foreground">
                    {noDataConfigs?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {pagination?.enabled &&
        pagination.verticalPosition === "bottom" &&
        Math.ceil((tableData?.length || 0) / itemsPerPage) > 1 && (
          <div
            className={cn(
              `${CustomTableStyles.pagination || ""} `,
              customClasses?.pagination ||
                `flex w-full flex-row items-center justify-${pagination.horizontalPosition || "end"}`
            )}
            style={customStyles?.pagination || {}}
          >
            {pagination.component ? (
              pagination.component()
            ) : (
              <Pagination
                layout={"CUSTOM_TABLE"}
                numberOfPages={Math.ceil(
                  (tableData?.length || 0) / itemsPerPage
                )}
                currentPage={currentPage}
                setCurrentPage={handlePaginationChange}
              />
            )}
          </div>
        )}
      {enableFooterActions && footerActions}
    </div>
  );
};

export default CustomTable;
