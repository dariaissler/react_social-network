import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './Components/redux/State';
import {addPost, updateNewPostText, sendMessage} from './Components/redux/State';
import {BrowserRouter} from 'react-router-dom';


// addPost('hello you bitches how is your fucking lifes? ');

export let renderEntireTree =(state) => {
    ReactDOM.render(
        <BrowserRouter>
          <App updateNewPostText={updateNewPostText} sendMessage={sendMessage} addPost={addPost} dialogs={state.dialogs} messages={state.messages} posts={state.posts} friends={state.friends}/>, 
        </BrowserRouter>,
      
        document.getElementById('root')
      );
}
renderEntireTree(state);
subscribe(renderEntireTree);

// ReactDOM.render(
//   <BrowserRouter>
//     <App addPost={addPost} dialogs={state.dialogs} messages={state.messages} posts={state.posts} friends={state.friends}/>, 
//   </BrowserRouter>,

//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
