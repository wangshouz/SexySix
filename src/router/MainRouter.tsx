/**
 * Created by joeshao on 2019/1/8.
 */

import * as React from "react";
import TabBarIcon, { TabBarIconImages } from "@src/components/TabBarIcon";
import { STACK_NAV_CONFIG } from "@src/router/config";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Home3 from "@src/pages/Home3";
import Home2 from "@src/pages/Home2";
import Home from "@src/pages/Home";
import IMAGES from "@src/resources";

const tabStackConfig = (
  title: string,
  imageName: TabBarIconImages,
  navigation: any,
  count: number
) => {
  const tabBarIcon = (props: any) => (
    <TabBarIcon imageName={imageName} count={count} {...props} />
  );
  return {
    title,
    tabBarIcon,
    tabBarVisible: !(navigation.state.index > 0)
  };
};

const homeStack = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: "Home",
    ...STACK_NAV_CONFIG.main
  }
);

const home2Stack = createStackNavigator(
  {
    Home2
  },
  {
    initialRouteName: "Home2",
    ...STACK_NAV_CONFIG.main
  }
);

const home3Stack = createStackNavigator(
  {
    Home3
  },
  {
    initialRouteName: "Home3",
    ...STACK_NAV_CONFIG.main
  }
);

const MainRouter = createBottomTabNavigator(
  {
    HomeStack: {
      screen: homeStack,
      navigationOptions: ({ navigation }: { navigation: any }) =>
        tabStackConfig("首页", IMAGES.tabIcon.home, navigation, 0)
    },
    Home2Stack: {
      screen: home2Stack,
      navigationOptions: ({ navigation }: { navigation: any }) =>
        tabStackConfig("订单", IMAGES.tabIcon.home1, navigation, 0)
    },
    Home3Stack: {
      screen: home3Stack,
      navigationOptions: ({ navigation }: { navigation: any }) =>
        tabStackConfig("我的", IMAGES.tabIcon.home2, navigation, 0)
    }
  },
  {
    initialRouteName: "HomeStack",
    tabBarOptions: {
      activeTintColor: "#108AED",
      inactiveTintColor: "#A1A1A1"
    }
  }
);

export { MainRouter };
