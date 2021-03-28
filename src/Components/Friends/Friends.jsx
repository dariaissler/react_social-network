import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend';


const Friends = (props) => {
    let friendElement = props.friends.map(f => <Friend name={f.name} id={f.id}/>)
    return (
        <div className={s.friendsBlock}>
            <h2>My friends </h2>
            <div className={s.friends}>
         {friendElement}
            </div>
        </div>
    )
}


export default Friends;