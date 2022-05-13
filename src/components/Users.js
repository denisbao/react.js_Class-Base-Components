import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    this.state = { // always is an object and always have to be called state!
      showUsers: true,
      more: 'just testing'
    };    
  }

  toggleUsersHandler() {
    this.setState((curState) => { // always recieves an object!
      return { 
        showUsers: !curState.showUsers
      }
    }); 
  }
  
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided!')
    }
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}

export default Users;


// FUNCTIONAL COMPONENT VERSION =============================
//
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

// export default Users;
