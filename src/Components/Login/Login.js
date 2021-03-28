import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormControls/FormsControls';
import {required} from '../../Utils/Validators/validator';
import {connect} from 'react-redux';
import {login} from '../redux/AuthReducer';
import {Redirect} from 'react-router-dom';
import s from '../common/FormControls/FormControl.module.css';


const LoginForm = ({handleSubmit, error}) => {
     return (
          <form onSubmit={handleSubmit}>
               <div>
                    <Field validate={[required]} name={"email"} placeholder={"email"} component={Input}/>
               </div>
               <div>
                    <Field validate={[required]} name={"password"} type={"password"} placeholder={"Password"} component={Input}/>
               </div>
               <div>
                    <Field name={"rememberMe"} type={"checkbox"} component={'input'}/> remember me
               </div>
               { error && <div className={s.formError}>
                    {error}
               </div>}
               <div>
                    <button>Login</button>
               </div>
          </form>
     )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);

const Login = (props) => {
     const onSubmit = (formData) => {
          props.login(formData.email, formData.password, formData.rememberMe);
     }

     if(props.isAuth){
          return <Redirect to={"/profile"}/>
     }

     return <div>
          <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
     </div>
}



const mapStateToProps = (state) => ({
     isAuth : state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);