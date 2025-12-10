# TanStack Excel-like Data Table

A high-performance React TypeScript application featuring an Excel-like data table with advanced functionality including cell selection, inline editing, copy/paste, virtualization, and undo/redo history.

## Features

### 📊 Table Functionality

- **Cell Selection & Navigation**
  - Single cell selection via click
  - Range selection via mouse drag
  - Arrow key navigation between cells
  - Shift+Arrow for extending selection range
  - Visual feedback with outlines and highlights

- **Inline Editing**
  - Double-click or Enter to activate edit mode
  - Custom input renderers per column (text, number with steps)
  - Escape to cancel, Enter/Tab to save
  - Automatic cell selection after edit

- **Copy/Paste Operations**
  - Copy selected ranges with Ctrl/Cmd+C (TSV format)
  - Paste data with Ctrl/Cmd+V starting from selected cell
  - Excel-compatible data formatting
  - Detailed change tracking with `PasteResult` callbacks
  - Automatic data type preservation

- **Undo/Redo History**
  - Full undo/redo support with Ctrl/Cmd+Z
  - Redo with Ctrl/Cmd+Shift+Z
  - Configurable history size
  - Tracks all data mutations

- **Performance Optimizations**
  - Row virtualization for datasets with 1000+ rows
  - Only visible rows rendered to DOM
  - Smooth scrolling with configurable overscan
  - Optimized re-renders with TanStack Table

- **Data Management**
  - 100+ column support
  - Fixed column widths (table-layout: fixed)
  - Customizable column definitions
  - Support for editable and read-only columns
  - Type-safe column accessors

## Tech Stack

### Core Dependencies
- **React 19.2.1** - Modern React with new JSX transform
- **TypeScript 5.9.3** - Type-safe development
- **TanStack Table 8.21.3** - Headless table state management
- **TanStack Virtual 3.13.13** - High-performance row virtualization
- **Vite 7.2.7** - Lightning-fast build tool with HMR
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **clsx 2.1.1** - Conditional class name utilities
- **@faker-js/faker 9.3.0** - Realistic data generation

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd tanstack-excel-like-dt

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server with hot reload
pnpm dev
# or
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format
```

### Generate Data

```bash
# Generate 500 strain entries (default)
pnpm generate-data

# Generate custom number of entries
pnpm generate-data 1000
```

The data generator creates realistic biological strain data with 100+ fields including temperature, pH, viability, cell count, dates, quality metrics, and more.

## Project Structure

```
src/
├── data-table/              # DataTable system
│   ├── data-table.tsx      # Main table component with virtualization
│   ├── use-data-table.tsx  # Table state and data management hook
│   ├── editable-cell.tsx   # Inline editing component
│   ├── use-cell-selection.tsx  # Cell selection logic
│   ├── use-copy-to-clipboard.tsx  # Copy/paste handlers
│   ├── use-history-state.tsx  # Undo/redo state management
│   ├── parse-copy-data.tsx    # Copy data formatter
│   ├── parse-paste-data.tsx   # Paste data parser
│   └── index.ts            # Barrel exports
├── table/                  # Table primitive components
│   ├── table.tsx          # Reusable table elements
│   └── index.ts
├── data/                   # Data files
│   └── strains.json       # Generated strain data
├── types/                  # TypeScript type definitions
│   └── react-table.ts     # TanStack Table extensions
├── app.tsx                 # Main application component
├── columns.tsx             # Column definitions
├── strains.tsx             # Data loader
├── index.tsx               # Application entry point
└── styles.css              # Global styles

scripts/
└── generateStrainData.js   # Data generation script
```

## Architecture

### DataTable Component

The `DataTable` component is the main table renderer with the following props:

```typescript
interface DataTableProps<TData> {
  table: TanStackTableType<TData>;        // TanStack Table instance
  allowCellSelection?: boolean;            // Enable single cell selection
  allowRangeSelection?: boolean;           // Enable range selection
  allowHistory?: boolean;                  // Enable undo/redo
  allowPaste?: boolean;                    // Enable paste functionality
  paste?: (cell, data) => PasteResult;    // Paste handler
  onPasteComplete?: (result) => void;     // Paste callback
  undo?: () => void;                       // Undo function
  redo?: () => void;                       // Redo function
}
```

### useDataTable Hook

Manages table state, history, and data operations:

```typescript
const { table, paste, undo, redo, canUndo, canRedo } = useDataTable({
  columns,
  data,
  history: true,
  maxHistorySize: 50
});
```

### Column Definitions

Columns support custom renderers and editability:

```typescript
{
  accessorKey: "name",
  header: "Name",
  size: 120,  // Fixed width in pixels
  meta: {
    editable: true  // Enables inline editing
  },
  cell: (cell) => (
    <EditableCell
      {...cell}
      renderInput={(props) => <input type="text" {...props} />}
    />
  )
}
```

### State Management Flow

1. Initial data loaded from `strains.json`
2. `useDataTable` hook manages current state with history
3. Cell updates trigger `updateCellData` via TanStack Table's meta API
4. Changes captured by `useHistoryState` when history enabled
5. TanStack Table re-renders only affected cells (optimized)
6. Virtualization ensures only visible rows in DOM

## Performance Features

- **Row Virtualization**: Handles 10,000+ rows smoothly
- **Fixed Table Layout**: Prevents expensive layout recalculations
- **Memoized Callbacks**: Optimized event handlers
- **Efficient Re-renders**: Only affected cells update
- **Overscan Buffer**: Pre-renders rows for smooth scrolling

## Customization

### Adding Columns

Edit `src/columns.tsx` and add column definitions:

```typescript
{
  accessorKey: "yourField",
  header: "Your Header",
  size: 100,
  meta: { editable: true },
  cell: (cell) => <EditableCell {...cell} renderInput={...} />
}
```

### Making Columns Editable

1. Add `meta: { editable: true }` to column definition
2. Wrap cell renderer with `<EditableCell>`
3. Provide custom `renderInput` prop for input control

### Adjusting Virtualization

Modify settings in `data-table.tsx`:

```typescript
const rowVirtualizer = useVirtualizer({
  estimateSize: () => 30,  // Row height in pixels
  overscan: 50,            // Buffer rows for smooth scrolling
});
```

### Styling

The project uses Tailwind CSS v4. Customize:
- `tailwind.config.js` - Tailwind configuration
- `src/styles.css` - Global styles and CSS variables
- Component files - Inline Tailwind classes

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Click | Select cell |
| Double-click | Edit cell (if editable) |
| Enter | Edit selected cell or save changes |
| Escape | Cancel editing |
| Tab | Save changes and move to next cell |
| Arrow keys | Navigate between cells |
| Shift + Arrow | Extend selection range |
| Ctrl/Cmd + C | Copy selected range |
| Ctrl/Cmd + V | Paste data |
| Ctrl/Cmd + Z | Undo last change |
| Ctrl/Cmd + Shift + Z | Redo last undone change |

## Browser Support

Modern browsers with ES2018+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing

Contributions are welcome! Please follow the existing code style and run `pnpm format` before submitting.

## License

[Your License Here]

## Acknowledgments

- [TanStack Table](https://tanstack.com/table) - Headless table library
- [TanStack Virtual](https://tanstack.com/virtual) - Virtualization library
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Vite](https://vite.dev) - Build tool
