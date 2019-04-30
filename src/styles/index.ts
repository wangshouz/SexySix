/**
 * Created by joeshao on 2019/1/8.
 */

import { Dimensions, PixelRatio } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export const LINE_HEIGHT = '$lineHeight'
export const BACKGROUND = '$backgroundColor'
export const NAV_COLOR = '$navColor'
export const WINDOW_WIDTH = '$windowWidth'
export const WINDOW_HEIGHT = '$windowHeight'

const { width, height } = Dimensions.get('window')

const globals = {
  [LINE_HEIGHT]: 1 / PixelRatio.get(),
  [BACKGROUND]: '#eeeff0',
  [NAV_COLOR]: '#3b57e5',
  [WINDOW_WIDTH]: width,
  [WINDOW_HEIGHT]: height,
  $rem: 1,
  $red: '#E40A0A',
  $yellow: '#FA8526',
  $disable: '#D7D7D7',
  $transparent: '#00FFFFFF',
}

export function rem(num: number) {
  return `${num}rem`
}

export function buildGlobalStyles() {
  EStyleSheet.build(globals)
}
