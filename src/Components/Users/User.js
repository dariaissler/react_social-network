import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/user.png';
import { NavLink } from 'react-router-dom';



let User = ({user, followingIsProgress, unfollow, follow}) => {
    return (
 <div>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                 {/* <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userImage}/> */}
                            <img alt="userPhoto" src={user.photos.small ?? userPhoto} className={s.userImage} />
                            </NavLink>
                        </div>

                        <span>
                            {user.followed ? <button disabled={followingIsProgress.some(id => id === user.id)} 
                            onClick={() => {unfollow(user.id)}}>
                                Unfollow</button> 
                            : <button disabled={followingIsProgress.some(id => id === user.id)}
                             onClick={() => {follow(user.id)}}>
                                 Follow</button>
                                }
                        </span>

                        <div className={s.userDescription}>
                            <div>{user.name}</div>
                            <div>country</div>
                            <div> city</div>
                            <div>{user.status}</div>
                        </div>
                
                    </div>
                    

                    )
                }


export default User;