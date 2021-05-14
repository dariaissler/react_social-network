import {userAPI} from '../../api/api';
import { UserType } from '../../Types/Types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IS_FETCHING = 'TOGGLE_FOLLOWING_IS_FETCHING';


let initialState = {
     users: [] as Array<UserType>,
     pageSize: 10,
     totalUsersCount: 0,
     currentPage : 1,
     isFetching: false,
     followingIsProgress: [] as Array <number> //array of user's ids
}

type InitialStateType = typeof initialState

  const usersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW: 
           return {
            ...state,
            users: state.users.map(u => {
           if(u.id  === action.userId) {
             return {...u, followed: true}
           }  
           return u 
          })
          }
        case UNFOLLOW: 
            return {
            ...state,
             users: state.users.map(u => {
               if(u.id === action.userId){
                 return {...u, followed: false}
               } return u
             })
            }
        case SET_USERS:
            return  {
        ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
              return  {
          ...state, currentPage: action.currentPage
              }
        case SET_TOTAL_USERS_COUNT:
                return  {
            ...state, totalUsersCount: action.count
                }
        case TOGGLE_IS_FETCHING:
                  return  {
              ...state, isFetching: action.isFetching
                  }
        case TOGGLE_FOLLOWING_IS_FETCHING:
                    return  {
                ...state, 
                followingIsProgress: action.isFetching 
                ? [...state.followingIsProgress, action.userId] 
                : state.followingIsProgress.filter(id => id !== action.userId)
                    }
        default:
            return state;
    }

 }
type FollowSuccessAxtionType = {
  type: typeof FOLLOW 
  userId: number
}
type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
type SetTotalUsersCountActionType = {
  type:  typeof SET_TOTAL_USERS_COUNT
  count: number 
}
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING 
  isFetching: boolean
}
type ToogleFollowingProgress = {
  type: typeof TOGGLE_FOLLOWING_IS_FETCHING
  isFetching: boolean
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessAxtionType => ({type: FOLLOW, userId})
export const unfollowSuccess =(userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId})
export const setUsers =(users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage =(currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT,  count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toogleFollowingProgress = (isFetching: boolean, userId: number): ToogleFollowingProgress  => ({type: TOGGLE_FOLLOWING_IS_FETCHING, isFetching, userId})

export const requestUsers = (currentPage: number, pageSize: number) => {
return async (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toogleFollowingProgress(true, userId))                            
    let data = await apiMethod(userId)
      if(data.resultCode === 0) {
         dispatch(actionCreator(userId))
      }  
      dispatch(toogleFollowingProgress(false, userId)) ;
}

export const  follow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), followSuccess)
}

export const  unfollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), unfollowSuccess);
}

export default usersReducer;