import {
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import RobotDetailCard from "../RobotDetailsCard";
import Alert from "@material-ui/lab/Alert";
import BarChart from "../../BarChart";
import image1 from "../../../assets/images/detail_image_1.jpeg";
import image2 from "../../../assets/images/detail_image_2.jpg";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
  scrollCard: {
    maxHeight: "250px",
    overflow: "auto",
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

const RobotDetailsGrid = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <RobotDetailCard title="current view" className={classes.card}>
            <div className={classes.media}>
              <img src={image2} alt="image2" />
            </div>
          </RobotDetailCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RobotDetailCard title="current location" className={classes.card}>
            <div className={classes.media}>
              <img src={image1} alt="image1" />
            </div>
          </RobotDetailCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RobotDetailCard title="milage per day" className={classes.card}>
            <div className={classes.chart} style={{ position: "relative" }}>
              <BarChart />
            </div>
          </RobotDetailCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className={classes.errorWrapper}>
            <RobotDetailCard title="diagnostic" className={classes.card}>
              <Alert severity="success" className={classes.chipData}>
                All System Okay
              </Alert>
            </RobotDetailCard>

            <Button variant="outlined" color="secondary">
              Go to tele operation
            </Button>
            <Button variant="outlined" color="secondary">
              Go to mission planner
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RobotDetailCard
            title="current mission"
            className={classes.scrollCard}
          >
            <List>
              <ListItem>
                <ListItemText
                  primary="Docking Station"
                  className={classes.chipData}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Take Measurement"
                  className={classes.chipData}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Docking Station"
                  className={classes.chipData}
                />
              </ListItem>
            </List>
          </RobotDetailCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RobotDetailCard title="last mission" className={classes.scrollCard}>
            <List>
              <ListItem>
                <ListItemText
                  primary="06-01-2021 11:45"
                  className={classes.chipData}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="06-01-2021 11:45"
                  className={classes.chipData}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="06-01-2021 11:45"
                  className={classes.chipData}
                />
              </ListItem>
            </List>
          </RobotDetailCard>
        </Grid>
      </Grid>
    </>
  );
};

export default RobotDetailsGrid;
