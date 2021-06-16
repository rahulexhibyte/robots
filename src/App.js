import React, { Component } from "react";
import "./App.css";
import "@fontsource/roboto";
import NavBar from "./components/navbar/index.js";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RobotTable from "./containers/robots";
import MissionEditor from "./components/missions/MissionEditor";
import Apps from "./containers/apps";
import Sites from "./containers/sites";
import Home from "./containers/home";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false, content: null };
  }

  componentDidMount() {
    const keycloak = { demo: "test" };
    this.setState({ keycloak: keycloak, authenticated: true });
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <ThemeProvider theme={theme}>
            <div>
              <BrowserRouter>
                <NavBar
                  keycloak={this.state.keycloak}
                  authenticated={this.state.authenticated}
                />
                <Switch>
                  <Route path="/robots">
                    <RobotTable
                      keycloak={this.props.keycloak}
                      onContentChange={this.props.onContentChange}
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
            </div>
          </ThemeProvider>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Taurob Admiralty...</div>;
  }
}
export default App;
