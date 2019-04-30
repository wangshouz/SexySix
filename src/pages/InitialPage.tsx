/**
 * Created by wangsz on 2019/4/29.
 */

import React from 'react'
import { View } from 'react-native'
import { inject } from 'mobx-react'
import { userStore } from '@src/mobx'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

@inject('userStore')
export default class InitialPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount(): void {
    if (userStore.isLogin) {
      this.props.navigation.navigate('MainRouter')
    } else {
      this.props.navigation.navigate('LoginRouter')
    }
  }

  render() {
    return <View />
  }
}
