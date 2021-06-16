import { Box, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
}));

const RobotDetailItem = ({ label, data }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.chipWrapper}>
        <Typography className={classes.chipLabel}>{label}</Typography>
        <Typography className={classes.chipData}>{data}</Typography>
      </Box>
    </>
  );
};

export default RobotDetailItem;
