const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
  id : number
  name: string
}
type MessagesType = {
  id: number
  message : string
}

let initialState = {
    dialogs: [
        // {id: 1, name: 'Daria'},
        // {id: 2, name: 'Ben'},
        // {id: 3, name: 'Alex'},
        // {id: 4, name: 'Kamila'},
        // {id: 5, name: 'Peter'},
      ] as Array<DialogType>,
      messages : [
        // {id: 1, message: 'Hi, How is life?'},
        // {id: 2, message: 'Go to hell'},
        // {id: 3, message: 'Can you borrow me some money?'},
        // {id: 4, message: 'Lets go for a walk?'},
      ] as Array<MessagesType>
      
}
export type InitialStateType = typeof initialState

  const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type SendMessageActionCreatorType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageActionCreator =(newMessageBody: string): SendMessageActionCreatorType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;