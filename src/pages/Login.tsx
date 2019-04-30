/**
 * Created by wangsz on 2019/4/29.
 */

import React from 'react'
import { PageProps } from '@src/router/PageProps'
import Wrapper from '@src/components/Wrapper'
import { Button, Toast, WingBlank } from '@ant-design/react-native'
import { inject } from 'mobx-react'
import { userStore } from '@src/mobx'
import EStyleSheet from 'react-native-extended-stylesheet'

interface Props extends PageProps {}

@inject('userStore')
export default class Login extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <Wrapper>
        <WingBlank style={mStyles.container}>
          <Button type="primary" onPress={this.login} style={mStyles.login}>
            登录
          </Button>
        </WingBlank>
      </Wrapper>
    )
  }

  /**登录*/
  private login = () => {
    userStore.setToken('abcdefg')
    Toast.loading('登录中', 2, () => {
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
  login: {},
})
