import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
   
    return (
       
        <div>
     
     <div>
     <img className={s.userImage} src={props.profile.photos.large ?? userPhoto} alt="userImage"/>
     <h3>{props.profile.fullName}</h3>
     </div>
     <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
     <div className={s.descriptionBlock} >
        <h4>about me: </h4>
        <p>{props.profile.aboutMe}</p>
     <p>{(props.profile.lookingForAJob) ? 'Я ищу работу' : 'Я не ищу работу, спасибо!'}</p>
     <p>{props.profile.lookingForAJobDescription}</p>
     <h4>My contacts: </h4>
    <p href="#">{props.profile.contacts.facebook}</p>
    <p href="#">{props.profile.contacts.website}</p>
    <p href="#">{props.profile.contacts.vk}</p>
    <p href="#">{props.profile.contacts.twitter}</p>
    <p href="#">{props.profile.contacts.instagram}</p>
    <p href="#">{props.profile.contacts.youtube}</p>
    <p href="#">{props.profile.contacts.github}</p>
    <p href="#">{props.profile.contacts.mainLink}</p>
    </div> 

     </div>
    )
}

export default ProfileInfo;