import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import {Route, withRouter } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import Login from './Components/Login/Login';
import {connect} from 'react-redux';
import {initializeAppThunk} from './Components/redux/appReducer';
import {compose} from 'redux';
import Preloader from './Components/common/Preloader/Preloader.jsx';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount(){
    this.props.initializeAppThunk();
}

  render(){
    if(!this.props.initialized) {
      return <Preloader/>
    }
   
    return(
      <div className='app-wrapper'>
            
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
              {/* <Route path='/dialogs' component={Dialogs}/>
              <Route path='/profile' component={Profile}/> */}
      
              <Route path='/dialogs' render={ () =>
                <Suspense fallback={<div>wait please...</div>}><DialogsContainer store={this.props.store}/></Suspense> } />
              <Route path='/profile/:userId?' render={ () => 
              <Suspense fallback={<div>wait please...</div>} ><ProfileContainer store={this.props.store}/></Suspense> } />    
              {/* <Route path='/friends' render={ () => <Friends friends={props.state.sideBar.friends}/>} /> */}
              <Route path='/users' render={()=> <UsersContainer/>}/>
              <Route path='/login' render={() => <Login/>} />
              
            
            </div>
            </div>
    );
    }
  }
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeAppThunk}))
(App)
