/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { PermissionsAndroid, Platform, View } from "react-native";
import { Provider } from "mobx-react";
import { createAppContainer } from "react-navigation";
import AppRouter from "@src/router";
import * as RootStore from "@src/mobx";

interface Props {}

interface State {
  loaded: boolean;
}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("dddddddddddddd");

    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    console.log("aaaaaa");

    await RootStore.userStore.loadToken();

    this.setState({ loaded: true });

    // android请求必要权限
    if (Platform.OS === "android") App.requestPermission();

    // 禁用调试模式的黄色弹框
    console.disableYellowBox = true;
  }

  static async requestPermission() {
    try {
      const permissions: string[] = [
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        // PermissionsAndroid.PERMISSIONS.CAMERA,
        // PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        // PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ];
      await PermissionsAndroid.requestMultiple(permissions);
    } catch (e) {}
  }

  render() {
    let router = null;
    if (this.state.loaded) {
      // 根据是否登录来判断进入App时是登录还是首页
      const AppContainer = createAppContainer(AppRouter);
      router = <AppContainer />;
    }
    return (
      <Provider {...RootStore}>
        <View>{router}</View>
      </Provider>
    );
  }
}
