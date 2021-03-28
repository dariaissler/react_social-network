
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';



const Navbar = (props) => {
    return(
       

     <nav className={s.nav}>
       <div className={`${s.item} ${s.active}`}>
         <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
       </div>
       <div className={s.item}>
       <NavLink activeClassName={s.active} to='/dialogs'>Messages</NavLink>
       </div>
       <div className={s.item}>
       <NavLink activeClassName={s.active} to='/users'>Users</NavLink>
       </div>
       <div className={s.item}>
       <NavLink to='#'>News</NavLink>
       </div>
       <div className={s.item}>
       <NavLink to='#'>Music</NavLink>
       </div>
       <div className={s.item}>
       <NavLink to='#'>Settings</NavLink>
       </div>
       {/* <div className={`${s.item} ${s.active}`}>
         <NavLink activeClassName={s.active} to='/friends'>Friends</NavLink>
       </div> */}
      
      
       
       
       
      
    </nav>
       
    )
}

export default Navbar;