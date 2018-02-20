import { LOGINED, LOGINOUT } from '../constants/ActionTypes'

const initialState = {
  logined: false
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case LOGINED:
      return { ...state, logined: true }
    case LOGINOUT:
      return { ...state, logined: false }
    default:
      return state
  }
}
