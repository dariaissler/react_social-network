import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
      return (
        <header className={s.header}>
            <p>Super Duper Social Network 🌵 </p>  
            <div className={s.loginBlock}>
              {props.isAuth 
              ? <div>{props.login} - <button onClick={props.logout}>LOG OUT</button></div>  
              : <NavLink to="/login">LOGIN</NavLink> }
            </div> 
        </header>
      )
}

export default Header;
       
  
     