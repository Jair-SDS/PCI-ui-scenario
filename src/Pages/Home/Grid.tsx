import { AgGridReact } from "ag-grid-react";
import data from "../../near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useRef } from "react";
import { SpacialObjct } from "../../Models/tableData";
import { columnDefs } from "./Components/columnData";

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

export default NeoGrid;
