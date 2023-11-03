import { ColDef } from "ag-grid-community";

const dateOptions: Intl.DateTimeFormatOptions = { year: "2-digit", month: "2-digit", day: "2-digit" };

export const columnDefs: ColDef[] = [
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

function potHazardousCell(params: { value: string }) {
  const valueData = params.value;
  return valueData === "Y" ? "Yes" : valueData === "N" ? "No" : "";
}
