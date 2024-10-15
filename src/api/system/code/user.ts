import { http } from '@/utils/http/axios'

export interface BasicResponseModel<T = any> {
  code: number
  message: string
  data: T

  isSuccess: () => boolean
}
export class ApiResponse implements BasicResponseModel {
  code!: number
  message!: string
  data: any

  constructor(code, message, data) {
    this.code = code
    this.message = message
    this.data = data
  }

  static of(val: BasicResponseModel) {
    const { data, code, message } = val
    return new ApiResponse(code, message, data)
  }

  isSuccess() {
    return this.code === 200
  }
}
/**
 * @description: csrf
 */
export function csrf(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/v1/csrf',
      method: 'GET',
      params,
    },
    {
      isTransformResponse: false,
    },
  )
}

/**
 * @description: 用户登录
 */
export function login(params: any) {
  return http.request<BasicResponseModel>(
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
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return http.request({
    url: '/getUserInfo',
    method: 'get',
  })
}

/**
 * @description: 用户登出
 */
export function doLogout() {
  return http.request({
    url: '/logout',
    method: 'POST',
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
