/**
 * Created by joeshao on 2018/11/11.
 */

import * as React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Badge from '@src/components/Bagde'
import EStyleSheet from 'react-native-extended-stylesheet'

export interface TabBarIconImages {
  selected: any
  unSelected: any
}

interface Props {
  imageName: TabBarIconImages
  focused: boolean
  count: number
}

export default class TabBarIcon extends React.Component<Props> {
  static defaultProps = {
    count: 0,
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    const { focused, imageName, count } = this.props
    const type = focused ? 'selected' : 'unSelected'
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 3,
        }}
      >
        <Image
          source={imageName[type]}
          style={styles.tabIcon}
          resizeMode={'contain'}
        />
        <Badge
          value={count}
          textStyle={styles.badgeTextStyle}
          containerStyle={styles.badgeContainerStyle}
        />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
  },
  badgeTextStyle: {
    color: '#fff',
    fontSize: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainerStyle: {
    padding: 0,
    width: 13,
    height: 13,
    backgroundColor: 'red',
    marginLeft: -9,
    marginTop: -14,
  },
})
