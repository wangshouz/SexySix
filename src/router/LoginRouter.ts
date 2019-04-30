/**
 * Created by joeshao on 2019/1/8.
 */

import { createStackNavigator } from "react-navigation";
import { STACK_NAV_CONFIG } from "./config";
import Login from "@src/pages/Login";

const LoginRouter = createStackNavigator(
  {
    Login
  },
  {
    initialRouteName: "Login",
    ...STACK_NAV_CONFIG.main
  }
);

export default LoginRouter;
