import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { getRobotColumns } from "../../components/robots/RobotColumns";
import RobotDetails from "../RobotDetails";
import { Switch, Route, withRouter } from "react-router-dom";

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

class RobotTable extends Component {
  constructor(props) {
    super(props);
    this.state = { response: null };
  }

  authorizationHeader() {
    if (!this.props.keycloak) return {};
    return {
      headers: {
        Authorization: "Bearer " + this.props.keycloak.token,
      },
    };
  }

  handleClick = () => {
    fetch("https://127.0.0.1:8443/fleet/robot/", this.authorizationHeader())
      .then((response) => {
        if (response.status === 200) return response.json();
        else return { status: response.status, message: response.statusText };
      })
      .then((json) =>
        this.setState((state, props) => ({
          response: JSON.stringify(json, null, 2),
        }))
      )
      .catch((err) => {
        this.setState((state, props) => ({ response: err.toString() }));
      });
  };

  setSelection(row) {
    this.props.history.push("/robots/" + row.data.id);
  }

  render() {
    const { classes } = this.props;
    const columns = getRobotColumns();

    const rows = [
      {
        id: 1,
        name: "Averell",
        status: "OnMission",
        location: "SGP-Meg-1",
        battery: 0.35,
        pressure: 45,
        mileage: 3434,
        hours: 34,
        lastService: "2020 - 05 - 17",
      },
      {
        id: 2,
        name: "Joe",
        status: "Charging",
        location: "SGP-Salt-Shelter",
        battery: 0.95,
        pressure: 65,
        mileage: 5,
        hours: 4,
        lastService: "2021 - 03 - 14",
      },
      {
        id: 3,
        name: "William",
        status: "Ready",
        location: "SGP-Meg-2",
        battery: 1,
        pressure: 65,
        mileage: 55,
        hours: 41,
        lastService: "2021 - 05 - 10",
      },
      {
        id: 4,
        name: "Jack",
        status: "Error",
        location: "SGP-CPH",
        battery: 0.15,
        pressure: 15,
        mileage: 5,
        hours: 4,
        lastService: "2018 - 12 - 04",
      },
    ];

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
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection={false}
                components={{
                  Toolbar: CustomToolbar,
                }}
                onRowSelected={(GridRowSelectedParams) => {
                  this.setSelection(GridRowSelectedParams);
                }}
              />
            </div>
          </div>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(withStyles(useStyles)(RobotTable));
