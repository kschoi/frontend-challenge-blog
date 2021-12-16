import { makeAutoObservable } from 'mobx'

type IStates = {
  openTour: boolean
  appWidth: number
}

export class AppStore implements IStates {
  public openTour: boolean = false
  public appWidth: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  public setOpenTour(open: boolean) {
    this.openTour = open
  }
}
export default new AppStore()
