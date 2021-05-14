import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={s.item}>
            {props.message}
            {props.name}
            <div>
              <span>🖤 ~ </span>    
              {props.likesCounts}
            </div>
        </div>
    )
}
export default Post;