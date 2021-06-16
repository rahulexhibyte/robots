import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles, Box } from "@material-ui/core";
import RobotDetailItem from "../../components/robots/RobotDetailsItem";
import RobotDetailsGrid from "../../components/robots/RobotDetailsGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    border: `solid 1px ${theme.palette.secondary.light}`,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    height: "100%",
  },
  scrollCard: {
    maxHeight: "250px",
    overflow: "auto",
  },
  title: {
    color: theme.palette.primary.light,
    fontWeight: 600,
    textTransform: "capitalize",
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
  chipWrapper: {
    color: theme.palette.primary.main,
    display: "flex",
    flex: 1,
    "&:not(:last-child)": {
      marginRight: 10,
    },
  },
  chipLabel: {
    color: theme.palette.primary.light,
    marginRight: 10,
    fontWeight: 600,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  chipData: {
    color: theme.palette.secondary.dark,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  errorWrapper: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      marginTop: 16,
    },
  },
  media: {
    height: 400,
    width: "100%",
    "& img": {
      objectFit: "cover",
      height: "100%",
      width: "100%",
    },
  },
  chart: {
    height: 400,
    width: "100%",
  },
}));

export default function RobotDetails() {
  const { name } = useParams();
  const classes = useStyles();
  return (
    <div className={classes.robotDetailWrapper}>
      <div className={classes.robotDetailHeader}>
        <h2>Robot - {name}</h2>
        <Link to={"/missions?FilterbyRobot=" + name}>Go to Mission Editor</Link>
      </div>
      <div elevation={1} className={classes.root}>
        <Box className={classes.shortData}>
          <RobotDetailItem label="Status" data="idle" />
          <RobotDetailItem label="Battery" data="100%" />
          <RobotDetailItem label="Pressure" data="95 mbar" />
          <RobotDetailItem label="Milage" data="3424km" />
          <RobotDetailItem label="Last service:" data="01-01-21" />
        </Box>
        <RobotDetailsGrid />
      </div>
    </div>
  );
}
