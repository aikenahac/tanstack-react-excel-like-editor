import { EditableCell } from "./data-table";
import { Strain } from "./strains";
import { ColumnDef } from "@tanstack/react-table";
import "./types/react-table";

export const columns: Array<ColumnDef<Strain>> = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => row.getValue("id"),
    size: 120,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="text" autoFocus {...props} value={props.value as string} />
        )}
      />
    ),
    size: 110,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "parent",
    header: "Parent",
    cell: ({ row }) => row.getValue("parent"),
    size: 100,
  },
  {
    accessorKey: "storage",
    header: "Storage",
    cell: ({ row }) => row.getValue("storage"),
    size: 100,
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => row.getValue("project"),
    size: 150,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="text" autoFocus {...props} value={props.value as string} />
        )}
      />
    ),
    size: 200,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "temperature",
    header: "Temp (°C)",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 80,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "ph",
    header: "pH",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 70,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "viability",
    header: "Viability (%)",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 90,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "cellCount",
    header: "Cell Count",
    cell: ({ row }) => row.getValue("cellCount"),
    size: 100,
  },
  {
    accessorKey: "plasmid",
    header: "Plasmid",
    cell: ({ row }) => row.getValue("plasmid"),
    size: 120,
  },
  {
    accessorKey: "marker",
    header: "Marker",
    cell: ({ row }) => row.getValue("marker"),
    size: 100,
  },
  {
    accessorKey: "medium",
    header: "Medium",
    cell: ({ row }) => row.getValue("medium"),
    size: 120,
  },
  {
    accessorKey: "osmolarity",
    header: "Osmolarity",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 90,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "oxygenLevel",
    header: "O2 Level",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 80,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "glucoseConc",
    header: "Glucose (g/L)",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 100,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "ethanolTolerance",
    header: "EtOH Tolerance",
    cell: ({ row }) => row.getValue("ethanolTolerance"),
    size: 120,
  },
  {
    accessorKey: "growthRate",
    header: "Growth Rate",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.01" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 100,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "flocculation",
    header: "Flocculation",
    cell: ({ row }) => row.getValue("flocculation"),
    size: 100,
  },
  {
    accessorKey: "attenuation",
    header: "Attenuation (%)",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 110,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "fermentationTime",
    header: "Ferment Time (h)",
    cell: ({ row }) => row.getValue("fermentationTime"),
    size: 120,
  },
  {
    accessorKey: "stressResistance",
    header: "Stress Resistance",
    cell: ({ row }) => row.getValue("stressResistance"),
    size: 130,
  },
  {
    accessorKey: "purityLevel",
    header: "Purity (%)",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 80,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "contamination",
    header: "Contamination",
    cell: ({ row }) => row.getValue("contamination"),
    size: 110,
  },
  {
    accessorKey: "geneticStability",
    header: "Genetic Stability",
    cell: ({ row }) => row.getValue("geneticStability"),
    size: 130,
  },
  {
    accessorKey: "mutationRate",
    header: "Mutation Rate",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.001" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 100,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "enzymicActivity",
    header: "Enzymic Activity",
    cell: ({ row }) => row.getValue("enzymicActivity"),
    size: 120,
  },
  {
    accessorKey: "metabolicRate",
    header: "Metabolic Rate",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.01" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 110,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "proteinExpression",
    header: "Protein Expression",
    cell: ({ row }) => row.getValue("proteinExpression"),
    size: 130,
  },
  {
    accessorKey: "lipidContent",
    header: "Lipid Content (%)",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 120,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "carbSource",
    header: "Carbon Source",
    cell: ({ row }) => row.getValue("carbSource"),
    size: 120,
  },
  {
    accessorKey: "nitrogenSource",
    header: "Nitrogen Source",
    cell: ({ row }) => row.getValue("nitrogenSource"),
    size: 130,
  },
  {
    accessorKey: "biomarkers",
    header: "Biomarkers",
    cell: ({ row }) => row.getValue("biomarkers"),
    size: 150,
  },
  {
    accessorKey: "generation",
    header: "Generation",
    cell: ({ row }) => row.getValue("generation"),
    size: 90,
  },
  {
    accessorKey: "passage",
    header: "Passage",
    cell: ({ row }) => row.getValue("passage"),
    size: 80,
  },
  {
    accessorKey: "freezeThawCycles",
    header: "Freeze/Thaw",
    cell: ({ row }) => row.getValue("freezeThawCycles"),
    size: 100,
  },
  {
    accessorKey: "storageCondition",
    header: "Storage Condition",
    cell: ({ row }) => row.getValue("storageCondition"),
    size: 130,
  },
  {
    accessorKey: "qualityScore",
    header: "Quality Score",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
        )}
      />
    ),
    size: 100,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "batchNumber",
    header: "Batch #",
    cell: ({ row }) => row.getValue("batchNumber"),
    size: 100,
  },
  {
    accessorKey: "laboratoryId",
    header: "Lab ID",
    cell: ({ row }) => row.getValue("laboratoryId"),
    size: 100,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="text" autoFocus {...props} value={props.value as string} />
        )}
      />
    ),
    size: 200,
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "applications",
    header: "Applications",
    cell: ({ row }) => row.getValue("applications"),
    size: 150,
  },
  {
    accessorKey: "riskAssessment",
    header: "Risk Assessment",
    cell: ({ row }) => row.getValue("riskAssessment"),
    size: 130,
  },
  {
    accessorKey: "complianceStatus",
    header: "Compliance",
    cell: ({ row }) => row.getValue("complianceStatus"),
    size: 100,
  },
  {
    accessorKey: "lastModified",
    header: "Last Modified",
    cell: ({ row }) => row.getValue("lastModified"),
    size: 120,
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
    cell: ({ row }) => row.getValue("createdBy"),
    size: 120,
  },
  {
    accessorKey: "createdOn",
    header: "Created On",
    cell: ({ row }) => row.getValue("createdOn"),
    size: 100,
  },
  {
    accessorKey: "version",
    header: "Version",
    cell: ({ row }) => row.getValue("version"),
    size: 80,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.getValue("status"),
    size: 100,
  },
  {
    accessorKey: "conductivity",
    header: "Conductivity (mS/cm²)",
    cell: (cell) => (
      <EditableCell
        {...cell}
        renderInput={(props) => (
          <input type="number" step="0.01" autoFocus {...props} value={props.value as string} />
        )}
      />
    ),
    size: 120,
    meta: {
      editable: true,
    },
  },
];
