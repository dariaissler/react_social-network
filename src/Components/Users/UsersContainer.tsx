import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import {follow, unfollow, requestUsers} from '../redux/UsersReducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingIsProgress} from '../redux/usersSelectors';
import { UserType } from '../../Types/Types';
import { AppStateType } from '../redux/redux-store';

type MapStatePropsType = {
   currentPage: number
   pageSize: number
   isFetching: boolean
   totalUsersCount: number
   users: Array<UserType>
   followingIsProgress: Array<number>
}
type MapDispatchPropsType = {
   requestUsers: (currentPage: number, pageSize: number) => void
   follow: (userId: number) => void
   unfollow: (userId: number) => void
}
// type OwnProps = {
//    something: smth
// }
type PropsType = MapStatePropsType & MapDispatchPropsType //& OwnProps

class UsersContainer extends React.Component<PropsType>{
 
   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber: number) => {
      this.props.requestUsers(pageNumber, this.props.pageSize);
   }

   render() {

       return  <>
          {this.props.isFetching ? <Preloader/> : null}
 
       <Users totalUsersCount={this.props.totalUsersCount}
       pageSize={this.props.pageSize}
       onPageChanged={this.onPageChanged}
       currentPage={this.props.currentPage}
       users={this.props.users}
       follow={this.props.follow}
       unfollow={this.props.unfollow}
       followingIsProgress={this.props.followingIsProgress}/>
       </>
   }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
   users: getUsers(state),
   pageSize: getPageSize(state),
   totalUsersCount: getTotalUsersCount(state),
   currentPage: getCurrentPage(state),
   isFetching: getIsFetching(state),
   followingIsProgress: getFollowingIsProgress(state),
   }
}

export default compose(
      connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps,
         {
            follow,
            unfollow,
            // setCurrentPage,
            // toogleFollowingProgress,
            requestUsers
         })
   )(UsersContainer)