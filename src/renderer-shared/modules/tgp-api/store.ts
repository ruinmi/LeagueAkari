import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTgpApiStore = defineStore('module:tgp-api', () => {
  const settings = reactive({
    enabled: true,
    qq: '',
    expired: true,
    tgpId: '',
    tgpTicket: ''
  })

  return {
    settings
  }
})
