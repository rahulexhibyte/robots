import { MissionProgress } from "./../../components/missions/missionProgress/index";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RobotDetailItem from "../../components/robots/robotDetailsItem";
import { getRoobotMissionById } from "../../redux/actions";
import RobotDetailCard from "../../components/robots/robotDetailsCard";
import image1 from "../../assets/images/detail_image_1.jpeg";

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
  card: {
    height: "100%",
  },
  media: {
    height: 400,
    width: "100%",
    "& img": {
      objectFit: "cover",
      height: 400,
      width: "100%",
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

const MissionViewer = () => {
  const classes = useStyles();
  const { robotid: robotId, missionid: missionId } = useParams();
  const dispatch = useDispatch();
  console.log(robotId, missionId);

  useEffect(() => {
    dispatch(getRoobotMissionById(robotId, missionId));
  }, []);
  const missionDetails = useSelector((state) => state.missionDetails);
  const { name, site, status, progresses = [], images = [] } = missionDetails;
  return (
    <>
      <div className={classes.robotDetailWrapper}>
        <div className={classes.robotDetailHeader}>
          <h2>Robot - {robotId}</h2>
        </div>
        <div elevation={1} className={classes.root}>
          <div>
            <Box className={classes.shortData}>
              <RobotDetailItem label="Mission Name : " data={name} />
              <RobotDetailItem label="Site : " data={site} />
              <RobotDetailItem
                label="Template : "
                data={<Link to="">{name}</Link>}
              />
            </Box>
          </div>
          <div>
            <RobotDetailItem label="Status : " data={status} />
          </div>
          <div>
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <MissionProgress progresses={progresses} />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <RobotDetailCard title="Map View" className={classes.card}>
                  <div className={classes.media}>
                    <img src={image1} alt="image1" />
                  </div>
                </RobotDetailCard>
                <Carousel
                  indicators={false}
                  navButtonsAlwaysVisible={true}
                  autoPlay={false}
                >
                  {images.map((image, i) => (
                    <div className={classes.media}>
                      <img src={image} alt={image} />
                    </div>
                  ))}
                </Carousel>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionViewer;
