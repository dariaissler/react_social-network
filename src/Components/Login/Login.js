import {reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormControls/FormsControls';
import {connect} from 'react-redux';
import {login, getCaptchaUrl} from '../redux/AuthReducer';
import {Redirect} from 'react-router-dom';
import s from '../common/FormControls/FormControl.module.css';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
     return (
          <form onSubmit={handleSubmit}>
               <div>
                    <Field  name={"email"} placeholder={"email"} component={Input}/>
               </div>
               <div>
                    <Field  name={"password"} type={"password"} placeholder={"Password"} component={Input}/>
               </div>
               <div>
                    <Field name={"rememberMe"} type={"checkbox"} component={'input'}/> remember me
               </div>

                 { captchaUrl && <div><img alt="captcha" src={captchaUrl}/></div> }
                 { captchaUrl && <Field placeholder={"symbols from image"} name={"captcha"}
                                        component={'input'}/> 
                 }
                 { error && <div className={s.formError}> {error} </div> }
               <div>
                 <button>Login</button>
               </div>
          </form>
     )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);

const Login = (props) => {
          const onSubmit = (formData) => {
            props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
            props.getCaptchaUrl(formData.captcha)
          }
          if(props.isAuth){
          return <Redirect to={"/profile"}/>
          }

          return <div>
          <h1>LOGIN</h1>
          <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
          </div>
}

const mapStateToProps = (state) => ({
     isAuth : state.auth.isAuth,
     captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login, getCaptchaUrl})(Login);