/**
 * Created by joeshao on 2018/11/11.
 */

import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BACKGROUND, NAV_COLOR } from '@src/styles'

interface Props {
  children: any
  statusBarStyle?: 'dark-content' | 'light-content'
  translucent?: boolean
}

export default class Wrapper extends React.Component<Props> {
  static defaultProps = {
    statusBarStyle: 'light-content',
    translucent: false,
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    const { children, statusBarStyle, translucent, ...others } = this.props
    const statusBarBackgroundColor =
      statusBarStyle === 'dark-content'
        ? '#ffffff'
        : EStyleSheet.value(NAV_COLOR)
    return (
      <SafeAreaView style={styles.container} {...others}>
        <StatusBar
          barStyle={statusBarStyle}
          backgroundColor={statusBarBackgroundColor}
          translucent={translucent}
        />
        {children}
      </SafeAreaView>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    tintColor: NAV_COLOR,
  },
})
