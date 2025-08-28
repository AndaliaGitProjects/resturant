import BaseApi from "./BaseApi"

export function loginAuth(option, data) {
  return BaseApi.post("api/auth/login", data, option).then((res) => res.data)
}
