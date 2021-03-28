import React from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, followingIsProgress,follow, unfollow, users, ...props}) => {

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