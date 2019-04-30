/**
 * Created by wangsz on 2019/4/29.
 */

import React from "react";
import { Text, View } from "react-native";
import { PageProps } from "@src/router/PageProps";

interface Props extends PageProps {}

export default class Login extends React.Component<Props> {
  static navigationOptions = {
    title: "登录"
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>登录</Text>
      </View>
    );
  }
}
