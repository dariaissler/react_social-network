import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer' ;
import s from './Profile.module.css';



const Profile = (props) => {
    return ( 
        <div className={s.profileBlock}>
       
       <ProfileInfo profile={props.profile} 
       status={props.status} 
       updateUserStatus={props.updateUserStatus}
       isOwner={props.isOwner}
       savePhoto={props.savePhoto}
       saveProfile={props.saveProfile}/>
       <MyPostsContainer store={props.store} />
      </div>
    )
}

export default Profile;