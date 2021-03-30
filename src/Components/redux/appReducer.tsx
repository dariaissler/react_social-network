import {authUserThunk} from './AuthReducer';

const  INITIALIZED_SUCCESS= 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}

  const appReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: 
           return {
            ...state, 
            initialized: true
            }
        default:
            return state;
    }

 }

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const initializeAppThunk = () => (dispatch: any) => {
let promise = dispatch(authUserThunk());
promise.then(() => {
    dispatch(initializedSuccess());
});


}

export default appReducer;