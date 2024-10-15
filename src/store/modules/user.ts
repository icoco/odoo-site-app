import { defineStore } from 'pinia'
import { createStorage } from '@/utils/Storage'
import { store } from '@/store'
import { ACCESS_TOKEN, CURRENT_USER, JS_SDK } from '@/store/mutation-types'
import { ResultEnum } from '@/enums/httpEnum'
import { ApiResponse, doLogout, getUserInfo, login } from '@/api/system/user'
import { PageEnum } from '@/enums/pageEnum'
import router from '@/router'
import emitBus from '@/utils/mitt'

// emitBus.emit('onLogin', true);
// emitBus.on('onLogin', ()=>{
//   setupSdk();
// });

const Storage = createStorage({ storage: localStorage })

interface UserInfo {
  userId: string | number
  username: string
  realname: string
  nickname: string
  avatar: string
  cover: string
  gender: number
  phone: string
  sign?: string
  industry?: number
}

interface IUserState {
  token?: string
  sdk?: string
  userInfo: Nullable<UserInfo>
  lastUpdateTime: number
}

interface LoginParams {
  csrf_token?: string
  login?: string
  username: string
  password: string
  autoLoadClient: boolean
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): IUserState => ({
    sdk: undefined,
    userInfo: null,
    token: undefined,
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): UserInfo {
      if (this.userInfo){
        return this.userInfo;
      }
      const result =  Storage.get(CURRENT_USER, '');
      if (result){
        return result;
      }
      return this.userInfo || Storage.get(CURRENT_USER, '') || {}
    },
    getToken(): string {
      return this.token || Storage.get(ACCESS_TOKEN, '')
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime
    },
    getSdk(): string {
      return this.sdk || Storage.get(JS_SDK, '')
    },
  },
  actions: {
    setSdk(val: string | undefined) {
      this.sdk = val || ''
      Storage.set(JS_SDK, val)
    },
    setToken(token: string | undefined) {
      this.token = token || ''
      Storage.set(ACCESS_TOKEN, token)
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info
      this.lastUpdateTime = new Date().getTime()
      Storage.set(CURRENT_USER, info)
    },

    async Login(params: LoginParams) {
      try {
        params.login = params.username
        params.autoLoadClient = true
        return this._Login(params)
      }
      catch (error) {
        return Promise.reject(error)
      }
    },

    async _Login(params: LoginParams) {
      try {
        console.debug('try _Login', params)
        const response = ApiResponse.of(await login(params))
        console.debug('  _Login response?', response)
        const { data, code, message } = response

        if (!response.isSuccess()) {
          throw new Error(`Failed login, code:${code}, message:${message}`)
        }
    
        const scrpitTags = data.scrpitTags
        this.setSdk(scrpitTags)
        this.setToken(scrpitTags)
        this.setSessionUser();
        console.debug('setToken scrpitTags?', scrpitTags) 

        return Promise.resolve(response)
      }
      catch (error) {
        return Promise.reject(error)
      }
    },
    //mock
    setSessionUser() {
      const user = {
        userId: '001',
        username: 'odoo-webclient',
        realname:  'odoo-webclient',
        nickname:  'odoo-webclient'
      
      } as UserInfo;
      this.setUserInfo(user)
    },

    async GetUserInfo() {
      const user = {
        userId: '001',
        username: 'odoo-webclient',
        realname:  'odoo-webclient',
        nickname:  'odoo-webclient'
      
      } as UserInfo;
      return new Promise((resolve, reject) => {
        resolve(user)
      });

      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            this.setUserInfo(res)
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async Logout() {
      if ( this.getToken) {
        try {
          await doLogout()
        }
        catch {
          console.error('注销Token失败')
        }
      }
      this.setSdk(undefined)
      this.setToken(undefined)
      this.setUserInfo(null)
      Storage.remove(JS_SDK)
      Storage.remove(ACCESS_TOKEN)
      Storage.remove(CURRENT_USER)
      router.push(PageEnum.BASE_LOGIN)
      location.reload()
    },
  },
})

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store)
}
