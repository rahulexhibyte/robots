import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withRouter } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import MainMenu from "./mainMenu";
import ProfileMenu from "./profileMenu";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: 30,
    [theme.breakpoints.down("sm")]: {
      height: 20,
    },
  },
  spacer: {
    flexGrow: 1,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      anchorEl: null,
      setAnchorEl: null,
      open: false,
      openMenu: false,
    };
  }

  componentDidMount() {
    this.setState({
      name: "John Deo",
    });
  }

  handleContentChange(content) {
    this.props.history.push("/" + content);
  }

  render() {
    const { classes } = this.props;

    const handleMenu = (event) => {
      this.setState({
        anchorEl: event.currentTarget,
        open: true,
        openMenu: false,
      });
    };

    const handleMainMenu = (event) => {
      this.state.openMenu
        ? this.setState({ openMenu: false, anchorEl: null })
        : this.setState({ openMenu: true, anchorEl: event.currentTarget });
    };

    const handleClose = (action) => {
      this.setState({ anchorEl: null, open: false });

      if (action === "logout") {
        // do nothing
      } else if (action === "account") {
        // do nothing
      }
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img
              src="/images/taurob_logo_white.svg"
              alt="Taurob"
              className={classes.logo}
              onClick={() => this.handleContentChange("")}
              style={{ cursor: "pointer" }}
            />
            <span className={classes.spacer} />
            <MainMenu />
            <ProfileMenu
              handleMenu={handleMenu}
              isOpen={this.state.open}
              name={this.state.name}
              anchorEl={this.state.anchorEl}
              onClose={handleClose}
            />
            <MobileMenu
              openMenu={this.state.openMenu}
              anchorEl={this.state.anchorEl}
              handleMenu={handleMainMenu}
              onClose={handleClose}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(NavBar));
