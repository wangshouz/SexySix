/**
 * Created by joeshao on 2018/11/11.
 */

import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

export default new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
})
