/**
 * Created by joeshao on 2019/1/8.
 */

import { Platform } from 'react-native'

const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56

type StackNavConfigType = {
  [key: string]: any
}

export const STACK_NAV_CONFIG: StackNavConfigType = {
  main: {
    defaultNavigationOptions: {
      headerTintColor: '#ffffff',
      gesturesEnabled: true,
      headerBackTitle: null,
      headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        color: '#ffffff',
      },
      headerTitleContainerStyle: {
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
      },
      headerStyle: {
        backgroundColor: '#3b87e5',
        borderBottomWidth: 0,
        elevation: 0,
      },
    },
    mode: 'card', // 页面跳转方式 card - 原生系统默认的的跳转;modal - 只针对iOS平台，模态跳转
    headerMode: 'float', // float - 渐变，类似iOS的原生效果;screen - 标题与屏幕一起淡入淡出;none - 没有动画
    cardStyle: { backgroundColor: '#eeeff0' }, // 为各个页面设置统一的样式，比如背景色，字体大小等
    allowFontScaling: false,
  },
}
