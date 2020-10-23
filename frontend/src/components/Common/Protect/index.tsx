import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import actions from "../../../store/actions";

type Props = {
  type: "both" | "public" | "private";
  children: JSX.Element;
};

export default function Protect({ type, children }: Props) {
  const { auth } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const router = useRouter();

  dispatch(actions.showLoader());

  if (type === "both") {
    dispatch(actions.hideLoader());
    return children;
  } else if (!auth && type === "public") {
    dispatch(actions.hideLoader());
    return children;
  } else if (auth && type === "private") {
    dispatch(actions.hideLoader());
    return children;
  }
  const route = type === "private" ? "/login" : "/profile";
  router.push(route);
  return null;
}
