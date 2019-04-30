/**
 * Created by joeshao on 2019/1/8.
 */
import { createSwitchNavigator } from "react-navigation";
import InitialPage from "@src/pages/InitialPage";
import LoginRouter from "@src/router/LoginRouter";
import { MainRouter } from "@src/router/MainRouter";

const AppRouter = createSwitchNavigator(
  {
    InitialPage,
    LoginRouter,
    MainRouter
  },
  {
    initialRouteName: "InitialPage"
  }
);
export default AppRouter;
