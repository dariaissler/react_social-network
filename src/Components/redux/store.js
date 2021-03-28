import {profileReducer} from './profileReducer.jsx';
import {dialogsReducer} from './dialogsReducer.jsx';



let store = {
    _state:  {
    dialogsPage: {
      dialogs: [
          {id: 1, name: 'Daria'},
          {id: 2, name: 'Ben'},
          {id: 3, name: 'Alex'},
          {id: 4, name: 'Kamila'},
          {id: 5, name: 'Peter'},
        ],
        messages : [
          {id: 1, message: 'Hi, How is life?'},
          {id: 2, message: 'I love you, bb'},
          {id: 3, message: 'Can you borrow me some money?'},
          {id: 4, message: 'Lets go for a walk?'},
        ],
        newMessageBody : '',
      },
      profilePage: {
        posts : [
          {id:1, message: 'Hi, how is life, bb?' ,likesCounts: 12},
          {id:2, message: 'It is my first post !!!' , likesCounts: 124},
          {id:4, message: 'I am gonna tell you smth about my life..' , likesCounts: 17},
        ],
        newPostText: 'Hi there!',
      },
      sideBar: {
        friends : [
          {id: 1, name: 'Ben'},
          {id: 2, name: 'Alex'},
          {id: 3, name: 'Kamila'},
          {id: 4, name: 'Peter'},
        ]
      }
      
      },
      _callSubscriber(){
        console.log('staete is changed');
      },
      getState(){
        return this._state;
      },
      subscribe(observer){
        this._callSubscriber = observer;
      },
      // addPost() {
      //   let newPost = {
      //     id: 5,
      //     message: this._state.profilePage.newPostText,
      //     likesCounts : 0
      //   };
      //   this._state.profilePage.posts.push(newPost);
      //   this._state.profilePage.newPostText = '';
      //   this._callSubscriber(this._state);
      // },
      // updateNewPostText(newText){
      //   this._state.profilePage.newPostText = newText;
      //   this._callSubscriber(this._state);
      // },
      // sendMessage(sendMess){
      //   let newMessage = {
      //     id: 4,
      //     message: sendMess
      //   };
      //   this._state.dialogsPage.messages.push(newMessage);
      //   this._callSubscriber(this._state);
      // },
      dispatch(action){

        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
      }
}



window.state = store;

export default store;