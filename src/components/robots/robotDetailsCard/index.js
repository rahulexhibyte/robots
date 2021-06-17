import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
  title: {
    color: theme.palette.primary.light,
    fontWeight: 600,
    textTransform: "capitalize",
  },
  media: {
    height: 400,
    width: "100%",
    "& img": {
      objectFit: "cover",
      height: "100%",
      width: "100%",
    },
  },
}));

const RobotDetailCard = ({ title, children, className }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={className}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </>
  );
};

export default RobotDetailCard;
