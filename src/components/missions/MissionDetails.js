import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
      width: "18ch",
    },
  },
  tags: {
    "& .MuiChip-root": {
      color: "#fff",
      backgroundColor: `${theme.palette.primary.light}`,
    },
  },
  apps: {
    "& .MuiChip-root": {
      backgroundColor: `${theme.palette.secondary.light}`,
    },
  },
}));

export default function MissionDetails(props) {
  const classes = useStyles();

  const { value, index, details, ...other } = props;

  const tags = ["Emailer", "Merkle", "Man in the Loop"];

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <TextField
              id="name"
              label="Step Name"
              defaultValue={details.name}
              variant="outlined"
            />
            <Autocomplete
              multiple
              id="tags"
              options={tags}
              getOptionLabel={(option) => option}
              defaultValue={details.tags}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Tags" />
              )}
              className={classes.tags}
            />
            <Autocomplete
              multiple
              id="apps"
              options={tags}
              getOptionLabel={(option) => option}
              defaultValue={details.apps}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Apps" />
              )}
              className={classes.apps}
            />
            <TextField
              id="coordinates"
              label="Coordinates"
              defaultValue={details.coordinates}
              variant="outlined"
              disabled
            />
            <TextField
              id="lastVisited"
              label="Last Visited"
              defaultValue={details.lastVisited}
              variant="outlined"
              disabled
            />
            <TextField
              id="recordedBy"
              label="Recorded by"
              defaultValue={details.recordedBy}
              variant="outlined"
              disabled
            />
            <Button variant="contained">Cancel</Button>
            <Button variant="contained" color="primary">
              Update
            </Button>
          </Box>
        )}
      </div>
    </form>
  );
}
