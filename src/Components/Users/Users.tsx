import React from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import { UserType } from '../../Types/Types';

type PropsType = {
    currentPage: number  
    totalUsersCount: number 
    pageSize: number 
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingIsProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let Users: React.FC<PropsType>= ({currentPage, onPageChanged, totalUsersCount, pageSize, followingIsProgress,follow, unfollow, users, ...props}) => {

    return (
        <div>
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
     totalItemsCount={totalUsersCount} pageSize={pageSize}/>

            <div>
                {
                    users.map(u => <User key={u.id} user={u} 
                        followingIsProgress={followingIsProgress}
                        follow={follow}
                        unfollow={unfollow}/> 
                    )
                }
                
            </div>
        </div>

    )
}


export default Users;