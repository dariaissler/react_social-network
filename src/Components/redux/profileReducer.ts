import {userAPI, profileAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';
import { PhotosType, PostType, ProfileType } from '../../Types/Types';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
  posts : [
    // {id:1, message: 'Hi, how is life, bb?' ,likesCounts: 12},
    // {id:2, message: 'It is my first post !!!' , likesCounts: 124},
    // {id:4, message: 'I am gonna tell you smth about my life..' , likesCounts: 17},
  ] as Array <PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostBody: ''
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {

switch (action.type) {
      case ADD_POST: 
  let newPost = {
    id: 5,
    message: action.newPostBody,
    likesCounts: 0
  };
  return {
    ...state,
    newPostBody: '',
    posts: [...state.posts, newPost]
    };

      case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
      case SET_USER_STATUS:
        return {
          ...state,
          status: action.status
        };
        case SAVE_PHOTO_SUCCESS:
        return {
          ...state,
          profilePage: {...state.profile, photos: action.photos}
        };
      default:
        return state;
}
}

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}
type AddPostActionCreatorActionType = {
  type: typeof ADD_POST
  newPostBody: string
}
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({type: SET_USER_STATUS, status})
export const addPostActionCreator = (newPostBody: string): AddPostActionCreatorActionType => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await userAPI.getProfile(userId)
      dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
 let response = await  profileAPI.getStatus(userId)
      dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    }else{
      dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    }
}


export default profileReducer;