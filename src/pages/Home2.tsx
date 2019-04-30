/**
 * Created by wangsz on 2019/4/29.
 */

import React from 'react'
import { View } from 'react-native'
import { PageProps } from '@src/router/PageProps'

interface Props extends PageProps {}

export default class Home2 extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home2',
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    return <View />
  }
}
