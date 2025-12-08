# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript application demonstrating an Excel-like data table with advanced features including cell selection, range selection, inline editing, copy/paste functionality, and undo/redo history.

Built with:
- React 18.2.0 with TypeScript 4.4.4
- TanStack Table (v8.17.3) for table state management
- react-scripts 5.0.1 for build tooling
- @faker-js/faker for data generation

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Generate strain data (default: 500 entries)
npm run generate-data

# Generate specific number of entries
npm run generate-data 250
```

## Architecture

### Core Components

**DataTable System** (`src/DataTable/`):
- `DataTable.tsx`: Main table component that renders TanStack Table with custom cell selection and keyboard navigation
- `useDataTable.tsx`: Custom hook that manages table state, data updates, and integrates history functionality
- `EditableCell.tsx`: Component enabling inline cell editing with view/edit modes, keyboard shortcuts (Enter to edit, Escape to cancel, Tab to save and move)
- `useCellSelection.tsx`: Hook managing cell selection state, range selection with mouse drag, and arrow key navigation
- `useCopyToClipboard.tsx`: Handles copying selected cell ranges to clipboard
- `useHistoryState.tsx`: Implements undo/redo functionality for data changes
- `parseCopyData.tsx` / `parsePasteData.tsx`: Utilities for clipboard data transformation

**Table Primitives** (`src/table/` or `src/Table/`):
- `table.tsx` or `Table.tsx`: Basic HTML table wrapper components (Table, TableHeader, TableBody, TableRow, TableHead, TableData) with custom styling

**Data Layer**:
- `src/strains.tsx`: Exports strain data array
- `src/data/strains.json`: Generated JSON data file with biological strain information
- `src/columns.tsx`: Column definitions including which fields are editable (via `meta.editable` property)

### Key Features Implementation

**Cell Selection**:
- Single cell selection via click
- Range selection via mouse drag (when `allowRangeSelection={true}`)
- Arrow key navigation between cells
- Shift+Arrow for extending selection range

**Inline Editing**:
- Double-click or press Enter on editable cells to activate edit mode
- Escape to cancel, Enter/Tab to save
- Column definitions mark editable fields with `meta: { editable: true }`

**Copy/Paste**:
- Ctrl/Cmd+C to copy selected range
- Paste (Ctrl/Cmd+V) pastes data starting from selected cell
- Data parsed/formatted for Excel-like behavior

**History**:
- Undo: Ctrl/Cmd+Z
- Redo: Ctrl/Cmd+Shift+Z
- History managed through `useHistoryState` hook with configurable max size

### TypeScript Configuration

- Path alias: `@root/*` maps to `src/*` (configured in tsconfig.json)
- Strict mode enabled
- CSS modules require type declarations (see `css.d.ts`)

### State Management

Data flow:
1. Initial data loaded from `strains.tsx`
2. `useDataTable` hook manages current state and history
3. Cell updates trigger `updateCellData` via TanStack Table's meta API
4. Changes captured by history system when `history={true}` prop is set
5. TanStack Table re-renders affected cells

### Customization Points

To modify table behavior:
- **Add columns**: Edit `src/columns.tsx`, add column definitions with appropriate accessorKey
- **Make column editable**: Set `meta: { editable: true }` and wrap cell renderer with `<EditableCell>`
- **Change data**: Modify `src/strains.tsx` or regenerate with `npm run generate-data`
- **Adjust history size**: Pass `maxHistorySize` prop to `useDataTable`
- **Customize keyboard shortcuts**: Modify event listeners in `DataTable.tsx` or `useCellSelection.tsx`

### Data Generation

The `scripts/generateStrainData.js` script uses @faker-js/faker to create biological strain data with fields like temperature, pH, viability, cell count, etc. Output written to `src/data/strains.json`.
