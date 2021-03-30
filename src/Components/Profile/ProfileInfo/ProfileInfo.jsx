import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if(!props.profile){
        return <Preloader/>
    }

    const onMainPhotoChange = (e) => {
   if(e.target.files.length){
       props.savePhoto(e.target.files[0]);
   }
}
const onSubmit = (formData) => {
    console.log(formData);
   props.saveProfile(formData);
   setEditMode(false);
}

   
    return (
       
        <div>
     
     <div>
     <img className={s.userImage} src={props.profile.photos.large ?? userPhoto} alt="userImage"/>
     <br/>
     {props.isOwner && <input type={"file"} onChange={onMainPhotoChange} />}
     
     </div>
     <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
     {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> 
               : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}
     

     </div>
    )
}
const ProfileData = (props) => {
    return (
        <div>
    <div className={s.descriptionBlock} >
    <h3>{props.profile.fullName}</h3>
       <h4>about me: </h4>
       <p>{props.profile.aboutMe}</p>
    <p>{(props.profile.lookingForAJob) ? 'Я ищу работу' : 'Я не ищу работу, спасибо!'}</p>
    <p>{props.profile.lookingForAJobDescription}</p>
  
   <div>Contacts: {Object.keys(props.profile.contacts)
   .map(key => {
      return  <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
   })}</div>
   </div> 
   { props.isOwner && <button onClick={props.goToEditMode}>edit info</button>}
   </div>
    )}



const Contact = ({contactTitle, contactValue}) => {
return <div className={s.contact}>{contactTitle}: {contactValue}</div>
} 

export default ProfileInfo;