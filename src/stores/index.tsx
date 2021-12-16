import React from 'react'

import { AppStore } from './modules/AppStore'
import { UserStore } from './modules/UserStore'

export default class RootStore {
  appStore
  userStore

  constructor() {
    this.appStore = new AppStore()
    this.userStore = new UserStore()
  }
}

const StoresContext = React.createContext(new RootStore())
export const useStores = () => React.useContext(StoresContext)
