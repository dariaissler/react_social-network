import {userAPI} from '../../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IS_FETCHING = 'TOGGLE_FOLLOWING_IS_FETCHING';

let initialState = {
     users: [],
     pageSize: 10,
     totalUsersCount: 0,
     currentPage : 1,
     isFetching: false,
     followingIsProgress: [],
}

  const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: 
           return {
            ...state,
            users: state.users.map(u => {
           if(u.id === action.userId) {
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

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess =(userId) => ({type: UNFOLLOW, userId})
export const setUsers =(users) => ({type: SET_USERS, users})
export const setCurrentPage =(currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT,  count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toogleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IS_FETCHING, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => {
return async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toogleFollowingProgress(true, userId))                            
    let data = await apiMethod(userId)
      if(data.resultCode === 0) {
         dispatch(actionCreator(userId))
      }  
      dispatch(toogleFollowingProgress(false, userId)) ;
}


export const  follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), followSuccess)
}

export const  unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), unfollowSuccess);
}

export default usersReducer;