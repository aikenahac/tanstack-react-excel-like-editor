import { EditableCell } from "./data-table";
import { Strain } from "./strains";
import { ColumnDef } from "@tanstack/react-table";
import "./types/react-table";

export const columns: Array<ColumnDef<Strain>> = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "110px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="text" autoFocus {...props} value={props.value as string} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "parent",
    header: "Parent",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("parent")}
      </div>
    ),
  },
  {
    accessorKey: "storage",
    header: "Storage",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("storage")}
      </div>
    ),
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "150px" }}>
        {row.getValue("project")}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "200px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="text" autoFocus {...props} value={props.value as string} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "temperature",
    header: "Temp (°C)",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "80px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "ph",
    header: "pH",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "70px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "viability",
    header: "Viability (%)",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "90px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "cellCount",
    header: "Cell Count",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("cellCount")}
      </div>
    ),
  },
  {
    accessorKey: "plasmid",
    header: "Plasmid",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("plasmid")}
      </div>
    ),
  },
  {
    accessorKey: "marker",
    header: "Marker",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("marker")}
      </div>
    ),
  },
  {
    accessorKey: "medium",
    header: "Medium",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("medium")}
      </div>
    ),
  },
  {
    accessorKey: "osmolarity",
    header: "Osmolarity",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "90px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "oxygenLevel",
    header: "O2 Level",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "80px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "glucoseConc",
    header: "Glucose (g/L)",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "ethanolTolerance",
    header: "EtOH Tolerance",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("ethanolTolerance")}
      </div>
    ),
  },
  {
    accessorKey: "growthRate",
    header: "Growth Rate",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.01" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "flocculation",
    header: "Flocculation",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("flocculation")}
      </div>
    ),
  },
  {
    accessorKey: "attenuation",
    header: "Attenuation (%)",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "110px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "fermentationTime",
    header: "Ferment Time (h)",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("fermentationTime")}
      </div>
    ),
  },
  {
    accessorKey: "stressResistance",
    header: "Stress Resistance",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "130px" }}>
        {row.getValue("stressResistance")}
      </div>
    ),
  },
  {
    accessorKey: "purityLevel",
    header: "Purity (%)",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "80px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "contamination",
    header: "Contamination",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "110px" }}>
        {row.getValue("contamination")}
      </div>
    ),
  },
  {
    accessorKey: "geneticStability",
    header: "Genetic Stability",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "130px" }}>
        {row.getValue("geneticStability")}
      </div>
    ),
  },
  {
    accessorKey: "mutationRate",
    header: "Mutation Rate",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.001" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "enzymicActivity",
    header: "Enzymic Activity",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("enzymicActivity")}
      </div>
    ),
  },
  {
    accessorKey: "metabolicRate",
    header: "Metabolic Rate",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "110px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.01" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "proteinExpression",
    header: "Protein Expression",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "130px" }}>
        {row.getValue("proteinExpression")}
      </div>
    ),
  },
  {
    accessorKey: "lipidContent",
    header: "Lipid Content (%)",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "carbSource",
    header: "Carbon Source",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("carbSource")}
      </div>
    ),
  },
  {
    accessorKey: "nitrogenSource",
    header: "Nitrogen Source",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "130px" }}>
        {row.getValue("nitrogenSource")}
      </div>
    ),
  },
  {
    accessorKey: "biomarkers",
    header: "Biomarkers",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "150px" }}>
        {row.getValue("biomarkers")}
      </div>
    ),
  },
  {
    accessorKey: "generation",
    header: "Generation",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "90px" }}>
        {row.getValue("generation")}
      </div>
    ),
  },
  {
    accessorKey: "passage",
    header: "Passage",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "80px" }}>
        {row.getValue("passage")}
      </div>
    ),
  },
  {
    accessorKey: "freezeThawCycles",
    header: "Freeze/Thaw",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("freezeThawCycles")}
      </div>
    ),
  },
  {
    accessorKey: "storageCondition",
    header: "Storage Condition",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "130px" }}>
        {row.getValue("storageCondition")}
      </div>
    ),
  },
  {
    accessorKey: "qualityScore",
    header: "Quality Score",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.1" autoFocus {...props} value={props.value as number} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "batchNumber",
    header: "Batch #",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("batchNumber")}
      </div>
    ),
  },
  {
    accessorKey: "laboratoryId",
    header: "Lab ID",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("laboratoryId")}
      </div>
    ),
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "200px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="text" autoFocus {...props} value={props.value as string} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
  {
    accessorKey: "applications",
    header: "Applications",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "150px" }}>
        {row.getValue("applications")}
      </div>
    ),
  },
  {
    accessorKey: "riskAssessment",
    header: "Risk Assessment",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "130px" }}>
        {row.getValue("riskAssessment")}
      </div>
    ),
  },
  {
    accessorKey: "complianceStatus",
    header: "Compliance",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("complianceStatus")}
      </div>
    ),
  },
  {
    accessorKey: "lastModified",
    header: "Last Modified",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("lastModified")}
      </div>
    ),
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        {row.getValue("createdBy")}
      </div>
    ),
  },
  {
    accessorKey: "createdOn",
    header: "Created On",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("createdOn")}
      </div>
    ),
  },
  {
    accessorKey: "version",
    header: "Version",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "80px" }}>
        {row.getValue("version")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", width: "100px" }}>
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "conductivity",
    header: "Conductivity (mS/cm²)",
    cell: (cell) => (
      <div style={{ display: "flex", alignItems: "center", width: "120px" }}>
        <EditableCell
          {...cell}
          renderInput={(props) => (
            <input type="number" step="0.01" autoFocus {...props} value={props.value as string} />
          )}
        />
      </div>
    ),
    meta: {
      editable: true,
    },
  },
];
