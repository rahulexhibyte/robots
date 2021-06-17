import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FilterListIcon from "@material-ui/icons/FilterList";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  filterButton: {
    position: "relative",
    top: "30px",
    maxWidth: "30px",
    maxHeight: "20px",
    minWidth: "20px",
    minHeight: "20px",
    justifyContent: "center",
    "&.active": {
      color: "#fff",
      backgroundColor: `${theme.palette.primary.light}`,
    },
    "&.inactive": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: "#fff",
    },
  },
  selectMission: {
    minWidth: "150px",
  },
}));

const MissionSelector = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [mission, setMission] = React.useState("");

  const { search } = useLocation();
  const matchRobot = search.match(/FilterbyRobot=(.*)/);
  const matchSite = search.match(/FilterbySite=(.*)/);
  const matchApp = search.match(/FilterbyApp=(.*)/);
  const [robot, setRobot] = React.useState(matchRobot?.[1]);
  const [site, setSite] = React.useState(matchSite?.[1]);
  const [app, setApp] = React.useState(matchApp?.[1]);

  const [filter, setFilter] = React.useState(
    robot || site || app
      ? clsx(classes.filterButton, "active")
      : clsx(classes.filterButton, "inactive")
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
    if (event.target.innerText === "OK") {
      robot || site || app
        ? setFilter(clsx(classes.filterButton, "active"))
        : setFilter(clsx(classes.filterButton, "inactive"));
    }
  };

  /* REPLACE WITH BACKEND LOGIC */
  const missions = [
    { id: 1, name: "SGP-Demo" },
    { id: 2, name: "K5 Cellar Deck" },
    { id: 3, name: "Taurob Test A" },
  ];
  const robots = [
    { id: 1, name: "Avarell" },
    { id: 2, name: "Joe" },
    { id: 3, name: "William" },
    { id: 4, name: "Jack" },
  ];
  const sites = [
    { id: 1, name: "K5" },
    { id: 2, name: "SGP" },
    { id: 3, name: "TADI" },
  ];
  const apps = [
    { id: 1, name: "emailer" },
    { id: 2, name: "Human-in-the-Loop Detection" },
    { id: 3, name: "Merkle Dial Gauge Detector" },
  ];

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-mission">Select Mission</InputLabel>
        <Select
          native
          value={mission}
          onChange={(event) => {
            setMission(event.target.value);
          }}
          inputProps={{
            name: "mission",
            id: "select-mission",
          }}
          className={classes.selectMission}
        >
          <option aria-label="None" value="" />
          {missions.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleClickOpen} className={filter}>
        <FilterListIcon />
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Filter Missions</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-by-robot">by Robot</InputLabel>
              <Select
                native
                value={robot}
                onChange={(event) => {
                  setRobot(event.target.value);
                }}
                input={<Input id="filter-by-robot" />}
              >
                <option aria-label="None" value="" />
                {robots.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-by-site">by Site</InputLabel>
              <Select
                native
                value={site}
                onChange={(event) => {
                  setSite(event.target.value);
                }}
                input={<Input id="filter-by-site" />}
              >
                <option aria-label="None" value="" />
                {sites.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="filter-by-app">by App</InputLabel>
              <Select
                native
                value={app}
                onChange={(event) => {
                  setApp(event.target.value);
                }}
                input={<Input id="filter-by-app" />}
              >
                <option aria-label="None" value="" />
                {apps.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MissionSelector;
