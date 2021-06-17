import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { getRobotColumns } from "../../components/robots/robotColumns";
import RobotDetails from "../robotDetails";
import { Switch, Route, withRouter } from "react-router-dom";
import { getRobotsList } from "../../redux/actions";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
    "& .MuiDataGrid-root .MuiDataGrid-row": {
      cursor: "pointer",
      "&:nth-child(even)": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
  },
});

function CustomToolbar() {
  return (
    <GridToolbarContainer style={{ justifyContent: "flex-end" }}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const RobotTable = (props) => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRobotsList());
  }, []);
  const setSelection = (row) => {
    props.history.push("/robots/" + row.data.id);
  };
  const { classes } = props;
  const columns = getRobotColumns();
  return (
    <Switch>
      <Route path={"/robots/:name"}>
        <RobotDetails />
      </Route>
      <Route path={"/robots/"}>
        <div
          style={{
            display: "flex",
            height: "calc(100vh - 84px)",
            margin: "10px",
          }}
        >
          <div className={classes.root}>
            <DataGrid
              rows={robots}
              columns={columns}
              pageSize={5}
              checkboxSelection={false}
              components={{
                Toolbar: CustomToolbar,
              }}
              onRowSelected={(GridRowSelectedParams) => {
                setSelection(GridRowSelectedParams);
              }}
            />
          </div>
        </div>
      </Route>
    </Switch>
  );
};
export default withRouter(withStyles(useStyles)(RobotTable));
