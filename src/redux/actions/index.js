import { ContactSupportOutlined } from "@material-ui/icons";
import { constants } from "../constants ";
const robotsLists = [
  {
    id: 1,
    name: "Averell",
    status: "OnMission",
    location: "SGP-Meg-1",
    battery: 0.35,
    pressure: 45,
    mileage: 3434,
    hours: 34,
    lastService: "2020 - 05 - 17",
    currentView: {
      viewImage: "../../../assets/images/detail_image_2.jpg",
    },
    currentLocation: {
      locationImage: "../../../assets/images/detail_image_1.jpeg",
    },
    milageChart: {
      dates: [
        "07/06/21",
        "08/06/21",
        "09/06/21",
        "10/06/21",
        "11/06/21",
        "12/06/21",
        "13/06/21",
      ],
      milage: [25, 19, 3, 5, 15, 3, 7],
    },
    diagnostic: "All System Okay",
    currentMission: ["Taking Snacks", "Taking Snacks", "Taking Snacks"],
    lastMission: [
      {
        id: 1,
        date: "01-02-2021",
        mission: {
          name: "SGP-Deck-1",
          site: "SGP",
          status: "completed",
          mapImage: "imageUrl",
          progresses: [
            {
              time: "15/06/2021 13:57",
              action: "unDock",
              result: 1,
              status: "success",
            },
            {
              time: "16/06/2021 13:57",
              action: "unDock",
              result: 1,
              status: "warning",
            },
            {
              time: "15/06/2021 13:57",
              action: "unDock",
              result: 1,
              status: "failure",
            },
          ],
          images: [
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ],
        },
      },
      { id: 2, date: "01-02-2021" },
      { id: 3, date: "01-02-2021" },
      { id: 4, date: "01-02-2021" },
    ],
  },
  {
    id: 2,
    name: "Joe",
    status: "Charging",
    location: "SGP-Salt-Shelter",
    battery: 0.95,
    pressure: 65,
    mileage: 5,
    hours: 4,
    lastService: "2021 - 03 - 14",
    lastMission: [
      {
        id: 1,
        date: "01-02-2021",
        mission: {
          name: "SGP-Deck-1",
          site: "SGP",
          status: "completed",
          mapImage: "imageUrl",
          progresses: [
            {
              time: "15/06/2021 13:57",
              action: "unDock",
              result: 1,
              status: "success",
            },
            {
              time: "16/06/2021 13:57",
              action: "unDock",
              result: 1,
              status: "warning",
            },
            {
              time: "15/06/2021 13:57",
              action: "unDock",
              result: 1,
              status: "failure",
            },
          ],
          images: [
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ],
        },
      },
      { id: 2, date: "01-02-2021" },
      { id: 3, date: "01-02-2021" },
      { id: 4, date: "01-02-2021" },
    ],
  },
  {
    id: 3,
    name: "William",
    status: "Ready",
    location: "SGP-Meg-2",
    battery: 1,
    pressure: 65,
    mileage: 55,
    hours: 41,
    lastService: "2021 - 05 - 10",
  },
  {
    id: 4,
    name: "Jack",
    status: "Error",
    location: "SGP-CPH",
    battery: 0.15,
    pressure: 15,
    mileage: 5,
    hours: 4,
    lastService: "2018 - 12 - 04",
  },
];

const appsList = [
  { id: 1, title: "Emailer", desc: "Send Email upon Checkpoint Completion" },
  {
    id: 2,
    title: "Dial Gauge Detection",
    desc: "Read Dial Gauge & Raise alarms if threshold are exceeded.",
  },
  {
    id: 3,
    title: "Value Detection",
    desc: "Check if Value are Opened pr closed",
  },
  {
    id: 4,
    title: "Hotspot Detectcor",
    desc: "Analyze Temprature Hotspots and Raise Alarms",
  },
  {
    id: 5,
    title: "Human-in-the-Loop",
    desc: "Process any checkpoint data by human experts",
  },
  {
    id: 6,
    title: "Street View",
    desc: "Create Return to Scene Panoramas",
  },
  {
    id: 7,
    title: "3D Modeller",
    desc: "Export Point Cloudbased 3D Models from any Mission",
  },
  {
    id: 8,
    title: "GPA Detector",
    desc: "Define Behaviour to React on General Platform Alarm",
  },
];

const newsList = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: "See Sketches, it should have tiles that will be dynamically loaded from the backend that represent different Apps. Upon clicking on an App Tile, we will load an App-Detail page, which will come later. Please, take a reference as an Apple Store for a card design.",
  },
  {
    id: 2,
    image:
      "https://images.hindustantimes.com/img/2021/06/19/550x309/Milkha_Singh_1624086331150_1624086349308.jpg",
    desc: 'Milkha Singh will be given a state funeral by the Punjab government and as a mark of respect to the track legend a day\'s mourning will also be observed, chief minister Captain Amarinder Singh said on Saturday. "Have directed that Late Milkha Singh Ji will be given a State Funeral by our Government. Also Punjab will observe one day of State mourning as a mark of respect to the departed legend" Amarinder Singh tweeted.',
  },
  {
    id: 3,
    image:
      "https://resize3.indiatvnews.com/en/resize/newbucket/715_-/2021/06/southampton-getty-1624079052.jpg",
    desc: "Incessant rain washed out the opening day of the much-anticipated World Test Championship final at the Rose Bowl in Southampton, however, the weather forecast remains positive for at least the first half of the second day of the summit clash.",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: "See Sketches, it should have tiles that will be dynamically loaded from the backend that represent different Apps. Upon clicking on an App Tile, we will load an App-Detail page, which will come later. Please, take a reference as an Apple Store for a card design.",
  },
  {
    id: 5,
    image:
      "https://images.hindustantimes.com/img/2021/06/19/550x309/Milkha_Singh_1624086331150_1624086349308.jpg",
    desc: 'Milkha Singh will be given a state funeral by the Punjab government and as a mark of respect to the track legend a day\'s mourning will also be observed, chief minister Captain Amarinder Singh said on Saturday. "Have directed that Late Milkha Singh Ji will be given a State Funeral by our Government. Also Punjab will observe one day of State mourning as a mark of respect to the departed legend" Amarinder Singh tweeted.',
  },
  {
    id: 6,
    image:
      "https://resize3.indiatvnews.com/en/resize/newbucket/715_-/2021/06/southampton-getty-1624079052.jpg",
    desc: "Incessant rain washed out the opening day of the much-anticipated World Test Championship final at the Rose Bowl in Southampton, however, the weather forecast remains positive for at least the first half of the second day of the summit clash.",
  },
];

const getRobotsList = () => {
  const robots = robotsLists;
  return {
    type: constants.GET_ROBOT_LIST,
    robots,
  };
};

const getRobotsDetails = (robotId) => {
  const robotDetails =
    robotsLists[robotsLists.findIndex((robot) => robot.id === robotId)];
  console.log(robotDetails);
  return { type: constants.GET_ROBOTS_DETAILS, robotDetails };
};

const getRoobotMissionById = (robotId, missionId) => {
  console.log(typeof robotId, typeof missionId);

  const robotDetails =
    robotsLists[robotsLists.findIndex((robot) => robot.id === +robotId)];
  console.log(robotDetails);
  const robotMissions = robotDetails.lastMission;
  console.log(robotMissions);
  const missionDetails =
    robotMissions[
      robotMissions.findIndex((mission) => mission.id === +missionId)
    ].mission;
  console.log(missionDetails);
  return { type: constants.GET_ROBOT_MISSION_BY_ID, missionDetails };
};

const getApps = () => {
  const apps = appsList;
  return { type: constants.GET_APPS, apps };
};

const getNews = () => {
  const news = newsList;
  return { type: constants.GET_NEWS, news };
};

export {
  getRobotsList,
  getRobotsDetails,
  getRoobotMissionById,
  getApps,
  getNews,
};
