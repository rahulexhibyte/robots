import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MissionDetails from "../missionDetails";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function getMissionDetails() {
  return [
    { type: "Undock", name: "Salt Shelter" },
    {
      type: "Checkpoint",
      name: "Dial Gauge 1",
      tags: ["DialGauge"],
      apps: ["Emailer"],
      lastVisited: "2021-05-02",
      recordedBy: "Camille Puech",
      recordedAt: "2021-02-10 12:19",
    },
    {
      type: "Navigation",
      name: "Midway Point",
      coordinates: ["2929", "38383"],
    },
    { type: "Dock", name: "Salt Shelter" },
  ];
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "calc(100vh - 84px)",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    "& .MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
}));

export default function MissionTable() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const steps = getMissionDetails();

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Mission Steps"
        className={classes.tabs}
      >
        {steps.map((step, index) => (
          <Tab
            label={index + 1 + " " + step.name}
            key={index}
            {...a11yProps(index)}
            className={classes.tab}
          />
        ))}
      </Tabs>
      {steps.map((step, index) => (
        <MissionDetails
          value={value}
          key={index}
          index={index}
          details={step}
        />
      ))}
    </div>
  );
}
