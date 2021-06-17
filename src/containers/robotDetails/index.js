import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles, Box } from "@material-ui/core";
import RobotDetailItem from "../../components/robots/robotDetailsItem";
import RobotDetailsGrid from "../../components/robots/robotDetailsGrid";
import { useDispatch, useSelector } from "react-redux";
import { getRobotsDetails } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    border: `solid 1px ${theme.palette.secondary.light}`,
  },
  robotDetailWrapper: {
    margin: "15px 15px",
  },
  robotDetailHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    background: theme.palette.secondary.main,
    padding: "0 16px",
    borderRadius: "3px 3px 0 0",
    "& a": {
      padding: "9px 20px",
      lineHeight: "21px",
      fontWeight: 500,
      border: "1px solid #ffffff",
      borderRadius: "5px",
      transition: "all .2s",
      fontSize: "16px",
      background: "rgba(0,0,0,0)",
      color: "#ffffff",
      textDecoration: "none",
      "&:hover": {
        background: "rgba(255,255,255,0.2)",
      },
    },
  },
  shortData: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default function RobotDetails() {
  const { name } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { status, battery, pressure, milage, lastService } = useSelector(
    (state) => state.currentRobotDetail
  );

  useEffect(() => dispatch(getRobotsDetails(name)), []);
  return (
    <div className={classes.robotDetailWrapper}>
      <div className={classes.robotDetailHeader}>
        <h2>Robot - {name}</h2>
        <Link to={"/missions?FilterbyRobot=" + name}>Go to Mission Editor</Link>
      </div>
      <div elevation={1} className={classes.root}>
        <Box className={classes.shortData}>
          <RobotDetailItem label="Status" data={status} />
          <RobotDetailItem label="Battery" data={battery} />
          <RobotDetailItem label="Pressure" data={pressure} />
          <RobotDetailItem label="Milage" data={milage} />
          <RobotDetailItem label="Last service:" data={lastService} />
        </Box>
        <RobotDetailsGrid name={name} />
      </div>
    </div>
  );
}
