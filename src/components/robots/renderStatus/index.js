import * as React from "react";
import clsx from "clsx";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import InfoIcon from "@material-ui/icons/Info";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import DoneIcon from "@material-ui/icons/Done";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "left",
    "& .icon": {
      color: "inherit",
    },
    width: "120px",
    padding: "5px",
  },
  Ready: {
    color: theme.palette.success.dark,
    border: `1px solid ${theme.palette.success.main}`,
  },
  Charging: {
    color: theme.palette.warning.dark,
    border: `1px solid ${theme.palette.warning.main}`,
  },
  OnMission: {
    color: theme.palette.info.dark,
    border: `1px solid ${theme.palette.info.main}`,
  },
  Error: {
    color: theme.palette.error.dark,
    border: `1px solid ${theme.palette.error.main}`,
  },
}));

const Status = React.memo((props) => {
  const { status } = props;
  let icon = null;
  const classes = useStyles();
  if (status === "Error") {
    icon = <ReportProblemIcon className="icon" />;
  } else if (status === "Ready") {
    icon = <DoneIcon className="icon" />;
  } else if (status === "OnMission") {
    icon = <InfoIcon className="icon" />;
  } else if (status === "Charging") {
    icon = <AutorenewIcon className="icon" />;
  }
  let label = status;
  if (status === "OnMission") {
    label = "On Mission";
  }
  return (
    <Chip
      className={clsx(classes.root, classes[status])}
      icon={icon}
      size="small"
      label={label}
      variant="outlined"
    />
  );
});

export default function renderStatus(params) {
  return <Status status={params.value.toString()} />;
}
