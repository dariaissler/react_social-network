import React from 'react';
import {reduxForm, Field} from 'redux-form';
import s from '../../common/FormControls/FormControl.module.css';
import {Input, Textarea} from '../../common/FormControls/FormsControls';

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
              <div>
    <div className={s.descriptionBlock}>
    {/* <h3>{props.profile.fullName}</h3> */}
    <Field  name={"fullName"} placeholder={"fullName"} component={Input}/>
       {/* <h4>about me: </h4> */}
       {/* <p>{props.profile.aboutMe}</p> */}
       <Field name={"aboutMe"} placeholder={"about me"} component={Textarea}/>
    <p>{(props.profile.lookingForAJob) } </p>
    <p>looking for a job</p> 
    <Field  name={"lookingForAJob"}  component={Input} type={"checkbox"}/>
    <p>{props.profile.lookingForAJobDescription}</p>
    <Field  name={"lookingForAJobDescription"} placeholder={"professianal skills"} component={Textarea}/>
  
   <div>Contacts: {Object.keys(props.profile.contacts)
   .map(key => {
      return  <div className={s.contact}>
          <b>{key}:</b>  <Field name={"contacts." + key} placeholder={key} component={Input}/>
      </div>
   })}</div>
   </div> 
   <button>save</button>
   </div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;