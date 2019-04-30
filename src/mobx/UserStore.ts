/**
 * Created by joeshao on 2019/1/8.
 */
import { action, computed, observable, runInAction } from 'mobx'
import storage from '@src/storage'
import { StorageKey } from '@src/storage/StorageKey'

export default class UserStore {
  // Token
  @observable token: string | null = null

  @action.bound
  async loadToken() {
    try {
      const token = await storage.load({
        key: StorageKey.token,
      })
      runInAction(() => {
        this.token = token
      })
    } catch (e) {
      this.setToken('')
    }
  }

  @computed
  get isLogin() {
    return !!this.token
  }

  @action.bound
  setToken(token: string) {
    this.token = token
    storage.save({
      key: StorageKey.token,
      data: token,
    })
  }

  @action.bound
  cleanData() {
    this.token ? (this.token = null) : null

    storage.remove({ key: StorageKey.token })
  }
}
