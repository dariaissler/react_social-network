
import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { setAuthUserData, logout} from '../redux/AuthReducer';
import { compose } from 'redux';







class HeaderContainer extends React.Component{
//   componentDidMount(){
//     this.props.authUser();

// }


  render(){
    return (
    
        <Header {...this.props}/>
  
    )
  }

  }

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default compose(
  connect(mapStateToProps, {setAuthUserData,  logout})
)
(HeaderContainer);

// export default connect(mapStateToProps, {setAuthUserData, authUser: authUserThunk})(HeaderContainer);
       
  
     