import { Button } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";

import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = (theme) => ({
  button: {
    width: "130px",
    height: "64px",
    position: "relative",
    "&:after": {
      content: "' '",
      position: "absolute",
      top: "65px",
      left: 0,
      width: "100%",
      borderTop: "5px solid transparent",
      transform: "scaleX(0)",
      transition: "transform .2s ease-in-out",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonLabel: {
    marginLeft: theme.spacing(2),
    lineHeight: "19px",
  },
  buttonLogo: {
    height: "20px",
  },
});

const MainMenu = ({ classes }) => {
  const history = useHistory();
  const contentChange = (content) => {
    history.push("/" + content);
  };
  return (
    <>
      <div className={classes.menu}>
        <Button
          aria-label="Home"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          className={classes.button}
          onClick={() => contentChange("home")}
        >
          <HomeIcon />
          <span className={classes.buttonLabel}>Home</span>
        </Button>

        <Button
          aria-label="Robots"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          className={classes.button}
          onClick={() => contentChange("robots")}
        >
          <img
            src="/images/robot.svg"
            alt="Robots"
            className={classes.buttonLogo}
          />
          <span className={classes.buttonLabel}>Robots</span>
        </Button>

        <Button
          aria-label="Sites"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          className={classes.button}
          onClick={() => contentChange("sites")}
        >
          <img
            src="/images/site.svg"
            alt="Sites"
            className={classes.buttonLogo}
          />
          <span className={classes.buttonLabel}>Sites</span>
        </Button>

        <Button
          aria-label="Apps"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          className={classes.button}
          onClick={() => contentChange("apps")}
        >
          <AppsIcon />
          <span className={classes.buttonLabel}>Apps</span>
        </Button>
      </div>
    </>
  );
};

export default withStyles(useStyles)(MainMenu);
