import { connect } from 'react-redux';
import {sendMessageActionCreator} from '../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';


// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;


//     let updateNewMessage=(body)=> {
//       props.store.dispatch(updateNewMessageBodyActionCreator(body));
//     }
//     let sendMessage =()=> {
//       props.store.dispatch(sendMessageActionCreator());
//     };

//     return <Dialogs dialogsPage={state} updateNewMessage={updateNewMessage} sendMessage={sendMessage} />
// };


let mapStateToProps = (state) => {
    return {
   dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
sendMessage: (newMessageBody)=> {
    dispatch(sendMessageActionCreator(newMessageBody));
}
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps ),
    withAuthRedirect
)
(Dialogs);