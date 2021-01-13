import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Friends from './Components/Friends/Friends';
import {Route } from 'react-router-dom';


const App = (props) => {
  return(
<div className='app-wrapper'>
      
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        {/* <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/> */}

        <Route path='/dialogs' render={ () => <Dialogs sendMessage={props.sendMessage} dialogs={props.dialogs} messages={props.messages}/>} />
        <Route path='/profile' render={ () => <Profile updateNewPostText={props.updateNewPostText} newPostText={props.posts.newPostText} addPost={props.addPost} posts={props.posts}/>} />    
        <Route path='/friends' render={ () => <Friends friends={props.friends}/>} />
        
      
      </div>
      </div>
      

      
  
 
     
     
   

   

  );

};





export default App;
