import  { Component } from 'react'

import classes from './User.module.css';
class User extends Component{

  componentWillUnmount() {
    // this will run 3 times because we have 3 users
    console.log('-> User component: componentWillUnmount() is running...')
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }
}

export default User;


// FUNCTIONAL COMPONENT VERSION =============================
//
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// export default User;
