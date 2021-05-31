import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';

import { authUser } from './redux/actions';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Urlbar from './components/Urlbar/Urlbar';
// import Topbar from './components/Topbar/Topbar';
// import UserDialog from './components/UserDialog/UserDialog';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: dispatch(authUser())
  }    
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={() => {
                while(this.props.responseData.initialIsPending === true) {
                  return <Backdrop style={{backgroundColor:"transparent"}} open={this.props.responseData.isPending}>
                            <CircularProgress color="secondary" size={70} />
                          </Backdrop>
                }
                if(this.props.responseData.isAuth) {
                  return <Home />
                }
                return <Signin />
              }} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/urlbar" component={Urlbar} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
