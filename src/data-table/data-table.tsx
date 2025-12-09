import { clsx } from "clsx";
import type { Table as TanStackTableType } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Table } from "../table";
import type { CellCoordinates } from "./use-cell-selection";
import type { PasteResult } from "./use-data-table";
import { useCellSelection } from "./use-cell-selection";
import { useCopyToClipboard } from "./use-copy-to-clipboard";
import { parseCopyData } from "./parse-copy-data";
import { useEffect, useRef } from "react";

export interface DataTableProps<TData> {
  table: TanStackTableType<TData>;
  allowCellSelection?: boolean;
  allowRangeSelection?: boolean;
  allowHistory?: boolean;
  allowPaste?: boolean;
  paste?: (
    selectedCell: CellCoordinates,
    clipboardData?: string,
  ) => PasteResult;
  onPasteComplete?: (result: PasteResult) => void;
  undo?: () => void;
  redo?: () => void;
}

export function DataTable<TData>({
  table,
  allowCellSelection = false,
  allowRangeSelection = false,
  allowHistory = false,
  allowPaste = false,
  paste,
  onPasteComplete,
  undo,
  redo,
}: DataTableProps<TData>) {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const rows = table.getRowModel().rows;

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 30,
    overscan: 50,
  });

  const {
    selectedCell,
    selection: selectedRange,
    getCellRef,
    isCellSelected,
    isCellInRange,
    handleClick,
    handleKeyDown,
    handleMouseDown,
    handleMouseEnter,
  } = useCellSelection(rows, table.getVisibleFlatColumns());

  const [, copy] = useCopyToClipboard();

  useEffect(() => {
    const handleCopy = async (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "c" &&
        selectedRange
      ) {
        event.preventDefault();

        const clipboardData = parseCopyData(
          selectedRange,
          table.getRowModel().rows,
          table.getAllColumns(),
        );

        // TODO: it would be great to display a toast with success or error onCopy.
        // The copy function returns a success or error boolean.
        await copy(clipboardData);
      }
    };

    document.addEventListener("keydown", handleCopy);
    return () => document.removeEventListener("keydown", handleCopy);
  }, [selectedRange, copy]);

  useEffect(() => {
    if (allowPaste && paste && selectedCell) {
      const pasteHandler = (event: ClipboardEvent) => {
        const clipboardData = event.clipboardData?.getData("Text");
        const result = paste(selectedCell, clipboardData);

        if (onPasteComplete && result.totalChanges > 0) {
          onPasteComplete(result);
        }
      };

      document.addEventListener("paste", pasteHandler);
      return () => document.removeEventListener("paste", pasteHandler);
    }

    return undefined;
  }, [allowPaste, selectedCell, paste, onPasteComplete]);

  useEffect(() => {
    if (allowHistory && undo && redo) {
      const handleTableKeyDown = (event: KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "z") {
          event.preventDefault();
          if (event.shiftKey) {
            redo();
          } else {
            undo();
          }
        }
      };

      document.addEventListener("keydown", handleTableKeyDown);
      return () => document.removeEventListener("keydown", handleTableKeyDown);
    }

    return undefined;
  }, [allowHistory, undo, redo]);

  const virtualItems = rowVirtualizer.getVirtualItems();

  return (
    <div
      className={clsx("box-border border border-[hsl(240_5.9%_90%)] rounded-[var(--border-md)]", {
        "select-none": allowRangeSelection,
      })}
    >
      <div ref={tableContainerRef} className="h-[90vh] overflow-auto">
        <Table>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Head key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </Table.Head>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {rows.length > 0 ? (
              <>
                <tr style={{ height: `${virtualItems[0]?.start ?? 0}px` }} />
                {virtualItems.map((virtualRow) => {
                  const row = rows[virtualRow.index];
                  return (
                    <Table.Row
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      style={{
                        height: `${virtualRow.size}px`,
                      }}
                    >
                      {row.getVisibleCells().map((cell) => {
                        const cellRef = getCellRef(cell.row.id, cell.column.id);
                        const isSelected = isCellSelected(
                          cell.row.id,
                          cell.column.id,
                        );
                        const isInRange = isCellInRange(
                          cell.row.id,
                          cell.column.id,
                        );
                        const isEditable = cell.column.columnDef.meta?.editable;

                        return (
                          <Table.Data
                            key={cell.id}
                            ref={cellRef}
                            tabIndex={0}
                            onClick={() =>
                              allowCellSelection &&
                              handleClick(cell.row.id, cell.column.id)
                            }
                            onKeyDown={(e) => {
                              allowCellSelection &&
                                handleKeyDown(e, cell.row.id, cell.column.id);
                              if (e.key === "Enter") {
                                const editableCell =
                                  cellRef.current?.querySelector(
                                    "[data-editable-cell-viewing]",
                                  );
                                if (editableCell) {
                                  const event = new KeyboardEvent("keydown", {
                                    key: "Enter",
                                    bubbles: true,
                                    cancelable: true,
                                  });

                                  editableCell.dispatchEvent(event);
                                }
                              }
                            }}
                            onMouseDown={() =>
                              allowRangeSelection &&
                              handleMouseDown(cell.row.id, cell.column.id)
                            }
                            onMouseEnter={() =>
                              allowRangeSelection &&
                              handleMouseEnter(cell.row.id, cell.column.id)
                            }
                            data-row-id={cell.row.id}
                            data-column-id={cell.column.id}
                            className={clsx({
                              "outline outline-[1.5px] outline-[#3d5aa9] -outline-offset-[2px] rounded-[var(--border-md)] focus-visible:outline focus-visible:outline-[1.5px] focus-visible:outline-[#3d5aa9] focus-visible:-outline-offset-[2px] focus-visible:rounded-[var(--border-md)]":
                                isSelected,
                              "bg-[#dbe1ff]": !isSelected && isInRange,
                              "box-border p-0 cursor-text": isEditable,
                            })}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </Table.Data>
                        );
                      })}
                    </Table.Row>
                  );
                })}
                <tr
                  style={{
                    height: `${
                      rowVirtualizer.getTotalSize() -
                      (virtualItems[virtualItems.length - 1]?.end ?? 0)
                    }px`,
                  }}
                />
              </>
            ) : (
              <Table.Row>
                <Table.Data
                  colSpan={table.getVisibleFlatColumns().length}
                  className="h-24 text-center"
                >
                  No data.
                </Table.Data>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
