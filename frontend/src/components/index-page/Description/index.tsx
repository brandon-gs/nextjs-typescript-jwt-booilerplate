// Components
import { Typography } from "@material-ui/core";
// Hooks
import useStyles from "./styles";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <Typography variant={"h3"} component={"h1"} align={"center"}>
        Authentication with Next.js and JWT
      </Typography>
      <img
        alt={"Next.js logo"}
        src={"/img/nextjs.png"}
        className={classes.nextLogo}
      />
      <Typography
        variant={"body1"}
        component={"p"}
        align={"center"}
        gutterBottom
        className={classes.textDescription}
      >
        This project is a demonstration of authentication of an application in
        Next.js using JWT
      </Typography>
    </section>
  );
}
