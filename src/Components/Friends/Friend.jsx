import React from 'react';
import s from '../Dialogs/Dialogs.module.css' ;
import {NavLink} from 'react-router-dom';




const Friend = (props) => {
    let path = "/friends/" + props.id
    return ( 
        <div className={`${s.dialog} ${s.active}`}>
    <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink> 
       </div>
    )
}

export default Friend;




