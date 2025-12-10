import React from "react";
import { clsx } from "clsx";

export interface TableComponent
  extends React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLTableElement> &
      React.RefAttributes<HTMLTableElement>
  > {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  Head: typeof TableHead;
  Data: typeof TableData;
  Caption: typeof TableCaption;
}

const Table: Partial<TableComponent> = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="font-sans relative w-full">
    <table
      ref={ref}
      className={clsx(
        "w-full text-sm leading-5 caption-bottom border-collapse border-0 border-solid border-[hsl(240_5.9%_90%)]",
        "table-fixed",
        className
      )}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={clsx(
      "sticky top-0 z-10 bg-white [&_tr]:border-b",
      className
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={clsx("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={clsx(
      "border-t bg-[hsl(240_4.8%_95.9%/0.5)] font-medium",
      "[&_tr:last-child]:border-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={clsx(
      "border-b h-[30px] max-h-[30px]",
      "hover:bg-[hsl(240_4.8%_95.9%/0.5)]",
      "data-[state=selected]:bg-[hsl(240_4.8%_95.9%)]",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={clsx(
      "px-4 h-12 font-medium text-left align-middle",
      "text-[hsl(240_3.8%_46.1%)]",
      "has-[role=checkbox]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableData = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={clsx(
      "p-2 align-middle h-[30px] max-h-[30px] overflow-hidden text-ellipsis whitespace-nowrap has-[role=checkbox]:pr-0",
      className
    )}
    {...props}
  />
));
TableData.displayName = "TableData";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={clsx(
      "mt-4 text-sm leading-5 text-[hsl(240_3.8%_46.1%)]",
      className
    )}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Data = TableData;
Table.Caption = TableCaption;

export default Table as TableComponent;
