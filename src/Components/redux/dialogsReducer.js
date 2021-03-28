
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
      
}

  const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
   case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
              ...state,
              messages: [...state.messages, {id: 5, message: body} ]
            }
            
        
    default:
        return state;
    }

 }



export const sendMessageActionCreator =(newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})




export default dialogsReducer;