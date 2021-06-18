import {
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import RobotDetailCard from "../robotDetailsCard";
import Alert from "@material-ui/lab/Alert";
import BarChart from "../../barChart";
import image1 from "../../../assets/images/detail_image_1.jpeg";
import image2 from "../../../assets/images/detail_image_2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRobotsDetails } from "../../../redux/actions";
import { useHistory } from "react-router-dom";

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

const RobotDetailsGrid = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { name } = props;
  const {
    currentView,
    currentLocation,
    milageChart,
    diagnostic,
    currentMission = [],
    lastMission = [],
  } = useSelector((state) => state.currentRobotDetail);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getRobotsDetails(name)), []);
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
              <BarChart chartData={milageChart} />
            </div>
          </RobotDetailCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box className={classes.errorWrapper}>
            <RobotDetailCard title="diagnostic" className={classes.card}>
              <Alert severity="success" className={classes.chipData}>
                {diagnostic}
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
              {currentMission.map((mission, index) => {
                return (
                  <ListItem>
                    <ListItemText
                      primary={mission}
                      className={classes.chipData}
                    />
                  </ListItem>
                );
              })}
            </List>
          </RobotDetailCard>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RobotDetailCard title="last mission" className={classes.scrollCard}>
            <List>
              {lastMission.map((mission, index) => {
                return (
                  <ListItem
                    onClick={() => {
                      console.log(`/robots/${+name}/lm/${mission.id}`);
                      history.push(`/robots/${+name}/lm/${mission.id}`);
                    }}
                  >
                    <ListItemText
                      primary={mission.date}
                      className={classes.chipData}
                    />
                  </ListItem>
                );
              })}
            </List>
          </RobotDetailCard>
        </Grid>
      </Grid>
    </>
  );
};

export default RobotDetailsGrid;
