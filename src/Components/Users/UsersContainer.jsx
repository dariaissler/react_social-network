import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import {follow, unfollow, setCurrentPage, toogleFollowingProgress, requestUsers} from '../redux/UsersReducer';
import Preloader from '../common//Preloader/Preloader';
import { compose } from 'redux';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingIsProgress} from '../redux/usersSelectors';


class UsersContainer extends React.Component {
 
   componentDidMount() {

      this.props.requestUsers(this.props.currentPage, this.props.pageSize);

   }

   onPageChanged = (pageNumber) => {
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


let mapStateToProps = (state) => {
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
      connect(mapStateToProps,
         {
            follow,
            unfollow,
            setCurrentPage,
            toogleFollowingProgress,
            requestUsers
         })
   )
   (UsersContainer);