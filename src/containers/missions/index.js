import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import MissionSelector from "../../components/missions/missionSelector";
import MissionTable from "../../components/missions/missionTable";
const useStyles = makeStyles((theme) => ({
  pageHeader: {
    ...theme.typography.h4,
    display: "block",
    marginTop: "1em",
    marginBottom: "0.5em",
  },
  paper: {
    display: "block",
    marginTop: "2em",
    marginBottom: "2em",
  },
}));

const MissionEditor = (props) => {
  const classes = useStyles();

  // use https://material-ui.com/components/breadcrumbs/

  return (
    <Container>
      <span className={classes.pageHeader}>Mission Editor</span>
      Robots / Averell / Mission Editor
      <MissionSelector />
      <Paper elevation={3} className={classes.paper}>
        <MissionTable />
      </Paper>
    </Container>
  );
};

export default MissionEditor;
