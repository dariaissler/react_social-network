import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Components/redux/redux-store';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


// addPost('hello you bitches how is your fucking lifes? ');


    ReactDOM.render(
        <HashRouter>
        <Provider store={store}>
          <App dispatch={store.dispatch.bind(store)} store={store}/>, 
        </Provider>
        </HashRouter>,
      
        document.getElementById('root')
      );

      //basename={process.env.PUBLIC_URL} for BrowserRouter 


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
