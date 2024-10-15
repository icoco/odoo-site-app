
import type { OdooClientMananger } from 'odoo-webclient'
import { ApiResponse, getClientManager } from 'odoo-webclient'
import { http } from '@/utils/http/axios'

export { ApiResponse }

function loginWithOdooWebClient(params: any): Promise<ApiResponse> {
  const client: OdooClientMananger = getClientManager()
  const { login, password, autoLoadClient } = params
  const myPromise = new Promise<ApiResponse>((resolve, reject) => {
    client.login(login, password, autoLoadClient).subscribe({
      next: (r) => {
        resolve(r)
      },
      error: (e) => {
        reject(e)
      },
    })
  })
  return myPromise
}

function logoutWithOdooWebClient(): Promise<ApiResponse> {
  const client: OdooClientMananger = getClientManager() 
  const myPromise = new Promise<ApiResponse>((resolve, reject) => {
    client.logout().subscribe({
      next: (r) => {
        resolve(r)
      },
      error: (e) => {
        reject(e)
      },
    })
  })
  return myPromise
}

export function csrf(params: any) {

}
/**
 * @description: 用户登录
 */
export function login(params: any): Promise<ApiResponse> {
  if (true) {
    return loginWithOdooWebClient(params)
  }

  return http.request<ApiResponse>(
    {
      url: '/v1/login',
      method: 'POST',
      params,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    },
    {
      isTransformResponse: false,
    },

  )
}


/**
 * @description: 用户登出
 */
export function doLogout(): Promise<ApiResponse> {
  if (true) {
    return logoutWithOdooWebClient()
  }
  return http.request({
    url: '/logout',
    method: 'POST',
  })
}


/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return http.request({
    url: '/getUserInfo',
    method: 'get',
  })
}


/**
 * @description: 用户修改密码
 */
export function changePassword(params: any, uid: any) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    },
  )
}
