import React, { useEffect, useState } from "react";
import "./Main.css";
import "@fontsource/roboto";
import NavBar from "./components/navbar/index.js";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RobotTable from "./containers/robots";
import Apps from "./containers/apps";
import Sites from "./containers/sites";
import Home from "./containers/home";
import MissionEditor from "./containers/missions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003251", // Taurob Dark Blue
    },
    secondary: {
      main: "#5EBCA8", // Taurob Cyan
    },
  },
});

const Main = (props) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [content, setContent] = useState(null);
  useEffect(() => {
    const keycloak = {
      demo: "test",
    };
    setKeycloak(keycloak);
    setAuthenticated(true);
  }, []);

  if (keycloak) {
    if (authenticated)
      return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <NavBar keycloak={keycloak} authenticated={authenticated} />
            <Switch>
              <Route path="/robots">
                <RobotTable
                  keycloak={props.keycloak}
                  onContentChange={props.onContentChange}
                />
              </Route>
              <Route path="/sites">
                <Sites />
              </Route>
              <Route path="/apps">
                <Apps />
              </Route>
              <Route path="/account">
                <iframe
                  title="account"
                  src="https://127.0.0.1:8443/auth/realms/admiralty/account"
                  width="100%"
                  height="800px"
                  frameBorder="0"
                />
              </Route>
              <Route path="/missions">
                <MissionEditor />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      );
    else return <div>Unable to authenticate!</div>;
  }

  return <div>Initializing Taurob Admiralty...</div>;
};
export default Main;
