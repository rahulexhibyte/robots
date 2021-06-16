import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = (theme) => ({
  mainMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  buttonLogo: {
    height: "20px",
  },
});

const MobileMenu = ({ openMenu, anchorEl, handleMenu, onClose, classes }) => {
  const history = useHistory();
  return (
    <>
      <IconButton onClick={handleMenu} className={classes.mainMenu}>
        <MoreVertIcon color="secondary"></MoreVertIcon>

        <Menu
          open={openMenu}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          handleClose={onClose}
          keepMounted
        >
          <MenuItem onClick={() => history.push("/robots")}>
            <ListItemIcon>
              <img
                src="/images/robot-gray.svg"
                alt="Robots"
                className={classes.buttonLogo}
              />
            </ListItemIcon>
            <Typography variant="inherit">Robots</Typography>
          </MenuItem>
          <MenuItem onClick={() => history.push("/sites")}>
            <ListItemIcon>
              <img
                src="/images/site-gray.svg"
                alt="Sites"
                className={classes.buttonLogo}
              />
            </ListItemIcon>
            <Typography variant="inherit">Sites</Typography>
          </MenuItem>
          <MenuItem onClick={() => history.push("/apps")}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <Typography variant="inherit">Apps</Typography>
          </MenuItem>
        </Menu>
      </IconButton>
    </>
  );
};
export default withStyles(useStyles)(MobileMenu);
