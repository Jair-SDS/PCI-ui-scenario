import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

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
    filter: "agTextColumnFilter",
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    filter: "agTextColumnFilter",
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine h-[calc(100vh-56px)] w-[100vw]">
      <div className="flex flex-row justify-center items-center w-full">
        <h1 className="text-2xl font-semibold p-3">Near-Earth Object Overview</h1>
      </div>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
        defaultColDef={{
          sortable: true,
          filter: "agNumberColumnFilter",
        }}
      />
    </div>
  );
};

export default NeoGrid;
