/**
 * Created by wangsz on 2019/4/29.
 */

import React from 'react'
import { Text } from 'react-native'
import { PageProps } from '@src/router/PageProps'
import Wrapper from '@src/components/Wrapper'

interface Props extends PageProps {}

export default class Home extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <Text>Home</Text>
      </Wrapper>
    )
  }
}
