import * as React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    color: "inherit",
  },
}));

export const DemoLink = React.memo(function DemoLink(props) {
  const classes = useStyles(props);

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <a
      tabIndex={-1}
      className={classes.root}
      onClick={handleClick}
      href={props.href}
    >
      {props.children}
    </a>
  );
});

export default function renderLink(params) {
  return (
    <DemoLink href={params.value.toString()}>
      {params.value.toString()}
    </DemoLink>
  );
}
