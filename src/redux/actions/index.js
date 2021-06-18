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
            { time: "15/06/2021 13:57", action: "unDock", result: 1 },
            { time: "15/06/2021 13:57", action: "unDock", result: 1 },
            { time: "15/06/2021 13:57", action: "unDock", result: 1 },
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
            { time: "15/06/2021 13:57", action: "unDock", result: 1 },
            { time: "15/06/2021 13:57", action: "unDock", result: 1 },
            { time: "15/06/2021 13:57", action: "unDock", result: 1 },
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

export { getRobotsList, getRobotsDetails, getRoobotMissionById };
