import { constants } from "../constants ";

const initState = {
  robots: [],
  currentRobotDetail: {
    id: 1,
    status: "idle",
    battery: "100%",
    pressure: "95 mbar",
    milage: "3524km",
    lastService: "01-02-2021",
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
    lastMission: ["01-02-2021", "01-02-2021", "01-02-2021"],
  },
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case constants.GET_ROBOT_LIST:
      state.robots = action.robots;
      return {
        ...state,
      };

    case constants.GET_ROBOTS_DETAILS:
      state.currentRobotDetail = action.robotDetails;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducers;
