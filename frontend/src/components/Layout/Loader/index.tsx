// Components
import { Backdrop, CircularProgress } from "@material-ui/core";
// Hooks
import useStyles from "./styles";
import { useSelector } from "react-redux";

type Props = {
  forceShow: boolean;
};

export default function Loader({ forceShow = false }: Props) {
  const { show } = useSelector((state) => state.loader);
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={show ? show : forceShow}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
