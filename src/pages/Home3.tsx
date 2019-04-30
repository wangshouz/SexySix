/**
 * Created by wangsz on 2019/4/29.
 */

import React from 'react'
import { PageProps } from '@src/router/PageProps'
import { Button, Toast, WingBlank } from '@ant-design/react-native'
import Wrapper from '@src/components/Wrapper'
import EStyleSheet from 'react-native-extended-stylesheet'
import { inject } from 'mobx-react'
import { userStore } from '@src/mobx'

interface Props extends PageProps {}

@inject('userStore')
export default class Home3 extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home3',
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <WingBlank style={mStyles.container}>
          <Button type="primary" onPress={this.logout} style={mStyles.logout}>
            退出登录
          </Button>
        </WingBlank>
      </Wrapper>
    )
  }

  /**退出登录*/
  private logout = () => {
    userStore.cleanData()
    Toast.loading('退出中', 2, () => {
      this.props.navigation.navigate('InitialPage')
    })
  }
}

const mStyles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {},
})
