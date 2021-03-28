import {userAPI, profileAPI} from '../../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
  posts : [
    {id:1, message: 'Hi, how is life, bb?' ,likesCounts: 12},
    {id:2, message: 'It is my first post !!!' , likesCounts: 124},
    {id:4, message: 'I am gonna tell you smth about my life..' , likesCounts: 17},
  ],
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {

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
      default:
        return state;
}
}


export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId)
      dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
 let response = await  profileAPI.getStatus(userId)
      dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
}


export default profileReducer;