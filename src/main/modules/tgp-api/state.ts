import { makeAutoObservable } from 'mobx'

class TgpApiSettings {
  enabled: boolean = true
  qq: string = ''
  expired: boolean = true
  tgpId: string = ''
  tgpTicket: string = ''
  pskey: string = ''

  setEnabled(enabled: boolean) {
    this.enabled = enabled
  }

  setQQ(qq: string) {
    this.qq = qq
  }

  setExpired(expired: boolean) {
    this.expired = expired
  }

  setTgpId(tgpId: string) {
    this.tgpId = tgpId
  }

  setTgpTicket(tgpTicket: string) {
    this.tgpTicket = tgpTicket
  }

  setPskey(pskey: string) {
    this.pskey = pskey
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export class TgpApiState {
  settings = new TgpApiSettings()

  constructor() {
    makeAutoObservable(this)
  }
}
