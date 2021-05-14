import {authAPI, securityAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';

const  SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
     userId: null,
     email: null,
     login: null,
     isAuth: false,
     captchaUrl: null, 
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
        case GET_CAPTCHA_URL_SUCCESS:
          return {
            ...state, ...action.payload }
        default:
          return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const authUserThunk = () => async (dispatch) => {
   let data =  await authAPI.authUser()
    if(data.resultCode === 0){
      let {id, email, login} = data.data;
      dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) =>  async (dispatch) => {
   let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
      dispatch(authUserThunk())
    } else {
      if(data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message = data.data.messages.length > 0 ? data.data.messages[0] : "some error";
      dispatch(stopSubmit("login", {_error: message}))
    }
}

export const getCaptchaUrl = () =>  async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}
 
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if(data.resultCode === 0){
      dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;