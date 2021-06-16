import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  welcome: {
    marginRight: theme.spacing(2),
    fontSize: "0.7em",
    color: theme.palette.secondary.light,
  },
});

const ProfileMenu = ({
  handleMenu,
  name,
  onClose,
  isOpen,
  anchorEl,
  classes,
}) => {
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Typography variant="h6" className={classes.welcome}>
          {name}
        </Typography>

        <AccountCircle />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isOpen}
        onClose={onClose}
      >
        <MenuItem onClick={() => onClose("account")}>My account</MenuItem>
        <MenuItem onClick={() => onClose("logout")}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default withStyles(useStyles)(ProfileMenu);
