import { GetServerSidePropsContext } from "next-redux-wrapper";
export default function getNameServer(ctx: GetServerSidePropsContext): string {
  return ctx.req ? `http://localhost:${process.env.PORT}` : "";
}
