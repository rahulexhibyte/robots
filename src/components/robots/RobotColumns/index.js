import renderProgress from "../cellRenderers/renderProgress";
import renderLink from "../cellRenderers/renderLink";
import renderStatus from "../cellRenderers/renderStatus";

export const getRobotColumns = () => [
  { field: "id", hide: true },
  { field: "name", headerName: "Name", width: 130, renderCell: renderLink },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: renderStatus,
  },
  { field: "location", headerName: "Location", width: 200 },
  {
    field: "battery",
    headerName: "Battery",
    headerAlign: "center",
    type: "number",
    valueFormatter: (params) => params.value + "%",
    renderCell: renderProgress,
    width: 140,
  },
  {
    field: "pressure",
    headerName: "Overpressure",
    type: "number",
    valueFormatter: (params) => params.value + " mBar",
    width: 200,
  },
  {
    field: "mileage",
    headerName: "Mileage",

    type: "number",
    valueFormatter: (params) =>
      new Intl.NumberFormat().format(params.value) + " km",
    width: 160,
  },
  {
    field: "hours",
    headerName: "Operating Hours",
    type: "number",
    valueFormatter: (params) =>
      new Intl.NumberFormat().format(params.value) + " h",
    width: 180,
  },
  {
    field: "lastService",
    headerName: "Last Service",
    type: "date",
    width: 160,
    hide: true,
  },
];
