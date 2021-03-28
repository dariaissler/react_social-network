import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormControls/FormsControls';
import {required, maxLengthCreator} from '../../Utils/Validators/validator';


const maxLength = maxLengthCreator(100);

const Dialogs = (props) => {
  
  let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />) 
    let messagesElements = state.messages.map( m => <Message key={m.id} message={m.message}/> )
   


  
    const AddMessageForm = (props) => {
      return (
        <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newMessageBody" validate={[required, maxLength]} placeholder={"Type your message"}/> 
        <div><button>send</button></div> 
        </form>
      )
    }

    let addNewMessage =(values) => {
      props.sendMessage(values.newMessageBody)
    }

    const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm'})(AddMessageForm);

    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
         {dialogsElements}
          </div>

          <div className={s.messages}>
            {messagesElements}
            <div>
              <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
          </div>
      </div>
    )
};



export default Dialogs;