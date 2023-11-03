import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useRef } from "react";
import { SpacialObjct } from "./Models/tableData";

var dateOptions: Intl.DateTimeFormatOptions = { year: "2-digit", month: "2-digit", day: "2-digit" };

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    filter: "agTextColumnFilter",
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
    valueFormatter: (params: { value: string }) => {
      return new Date(params.value).toLocaleDateString("en-US", dateOptions);
    },
  },
  { field: "h_mag", headerName: "H (mag)" },
  { field: "moid_au", headerName: "MOID (au)" },
  { field: "q_au_1", headerName: "q (au)" },
  { field: "q_au_2", headerName: "Q (au)" },
  {
    field: "period_yr",
    headerName: "Period (yr)",
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    valueFormatter: potHazardousCell,
    filter: "agSetColumnFilter",
    filterParams: {
      valueFormatter: potHazardousCell,
    },
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    filter: "agTextColumnFilter",
  },
];

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<AgGridReact<SpacialObjct>>(null);
  return (
    <div className=" ag-theme-alpine h-[calc(100vh-56px)] w-[100vw] max-w-[2000px]">
      <div className="flex flex-row justify-start items-baseline">
        <h1 className="text-2xl font-semibold p-3">Near-Earth Object Overview</h1>
        <button className="ml-[15px]" onClick={handleClear}>
          Clear Filters and Sorters
        </button>
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
        defaultColDef={{
          sortable: true,
          filter: "agNumberColumnFilter",
        }}
        enableRangeSelection={true}
        enableRangeHandle={true}
      />
    </div>
  );

  function handleClear() {
    if (gridRef.current) {
      gridRef.current.api.setFilterModel(null);
      gridRef.current.columnApi.applyColumnState({
        defaultState: { sort: null },
      });
    }
  }
};

function potHazardousCell(params: { value: string }) {
  const valueData = params.value;
  return valueData === "Y" ? "Yes" : valueData === "N" ? "No" : "";
}

export default NeoGrid;
