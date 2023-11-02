import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation" },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
  },
  { field: "h_mag", headerName: "H (mag)", filter: "agNumberColumnFilter" },
  { field: "moid_au", headerName: "MOID (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", filter: "agNumberColumnFilter" },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    filter: "agNumberColumnFilter",
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    filter: "agNumberColumnFilter",
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine h-[calc(100vh-56px)] w-[100vw]">
      <div className="flex flex-row justify-center items-center w-full">
        <h1 className="text-2xl font-semibold p-3">
          Near-Earth Object Overview
        </h1>
      </div>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
        defaultColDef={{
          sortable: true,
          filter: "agTextColumnFilter",
        }}
      />
    </div>
  );
};

export default NeoGrid;
