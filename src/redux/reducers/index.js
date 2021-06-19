import { constants } from "../constants ";

const initState = {
  name: "John Deo",
  robots: [],
  currentRobotDetail: {},
  missionDetails: {},
  apps: [],
  news: [],
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case constants.GET_ROBOT_LIST:
      return {
        ...state,
        robots: action.robots,
      };

    case constants.GET_ROBOTS_DETAILS:
      return {
        ...state,
        currentRobotDetail: action.robotDetails,
      };

    case constants.GET_ROBOT_MISSION_BY_ID:
      return {
        ...state,
        missionDetails: action.missionDetails,
      };

    case constants.GET_APPS:
      return {
        ...state,
        apps: action.apps,
      };

    case constants.GET_NEWS:
      return {
        ...state,
        news: action.news,
      };

    default:
      return state;
  }
};

export default reducers;
