import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';

import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

// import { getData } from './redux/actions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    // sample: () => dispatch(getData())
  }    
}

class App extends Component {
  // componentDidMount() {
  //   this.props.sample()
  // }
  render(){return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Signin} exact />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    {/* <Button variant="contained" color="secondary">
      Hello World
    </Button> */}
      {/* {this.props.isPending ? <h1>Loading</h1> : this.props.data.map((data,i) => <h1 key={i}>{data.name}</h1>) } */}
      {/* {console.log(this.props.data)} */}
    </div>
  )}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
