export default function (api) {
  return {
    login() {
      return api.post('auth/password')
    },
  }
}
