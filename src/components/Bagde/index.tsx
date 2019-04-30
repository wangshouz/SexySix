/**
 * Created by wangsz on 2018/11/15.
 */

import React from 'react'
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

interface Props {
  containerStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  value: number
  children?: any
}

export default class Badge extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {
      value,
      textStyle,
      containerStyle,
      wrapperStyle,
      children,
    }: Props = this.props

    if (value <= 0) {
      return <View />
    }

    let childElement = (
      <Text style={[styles.text, textStyle]}>{value > 99 ? '99+' : value}</Text>
    )

    if (children) {
      childElement = children
    }

    return (
      <View style={[styles.container, wrapperStyle]}>
        <View style={[styles.badge, containerStyle]}>{childElement}</View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  badge: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
})
