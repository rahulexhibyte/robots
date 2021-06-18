import { constants } from "../constants ";

const initState = {
  robots: [],
  currentRobotDetail: {},
  missionDetails: {},
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

    default:
      return state;
  }
};

export default reducers;
