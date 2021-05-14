import {authAPI, securityAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';

const  SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType2 = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null 
}

let initialState  = {
     userId: null as number | null,
     email: null as string | null,
     login: null as string | null,
     isAuth: false,
     captchaUrl: null as string | null
}
export type InitialStateType = typeof initialState;

  const authReducer = (state = initialState, action: any): InitialStateType  => {

    switch (action.type) {
        case SET_USER_DATA: 
        case GET_CAPTCHA_URL_SUCCESS:
           return {
             userid: "hjshk",
            ...state, ...action.payload
            }
        default:
            return state;
    }
}
type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean | null
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const authUserThunk = () => async (dispatch: any) => {
   let data=  await authAPI.authUser()

    if(data.resultCode === 0){
      let {id, email, login} = data.data;
   dispatch(setAuthUserData(id, email, login, true))
    }
  }


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>  async (dispatch: any) => {
   let data: any = await authAPI.login(email, password, rememberMe, captcha)
    if(data.resultCode === 0){
      dispatch(authUserThunk())
    } else {
      if(data.resultCode === 10){
        dispatch(getCaptchaUrl());
      }
      let message = data.data.messages.length > 0 ? data.data.messages[0] : "some error";
    dispatch(stopSubmit("login", {_error: message}))
   }
  }


export const getCaptchaUrl = () =>  async (dispatch: any) => {
  let data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}
 


export const logout = () => async (dispatch: any) => {
    let data: any = await authAPI.logout()
    if(data.resultCode === 0){
      dispatch(setAuthUserData(null, null, null, false))
    }
  }

export default authReducer;