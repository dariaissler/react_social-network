import React from 'react';
import { Field , reduxForm} from 'redux-form';
import Post from '../Post/Post';  
import s from './MyPosts.module.css';
// import {required, maxLengthCreator}  from '../../../Utils/Validators/validator';
import {Textarea} from '../../common/FormControls/FormsControls';


// const maxLenght = maxLengthCreator(100);

const  MyPosts = React.memo (props  => {
     let postsElements = props.posts.map(p =>  
       <Post message={p.message} 
             key={p.id} 
             likesCounts={p.likesCounts}/>)
 
     let onAddPost = (values) => {
        props.addPost(values.newPostBody)
     }

     const AddPostForm = (props) => {
       return <form onSubmit={props.handleSubmit}>     
                <Field component={Textarea} 
                       name="newPostBody" 
                     //   validate={[required, maxLenght]} 
                       placeholder={"Type your post"}
                />
                <button>Add post</button>
              </form>
     }
     const AddPostReduxForm = reduxForm({ form: 'addPostForm'})(AddPostForm);

     return (
       <div className={s.postsBlock}>
           <h3>My posts</h3>
           <div>
              <AddPostReduxForm onSubmit={onAddPost}/>
           </div>
           <div className={s.posts}> 
              {postsElements}    
           </div>
       </div>
    )
})

export default MyPosts;