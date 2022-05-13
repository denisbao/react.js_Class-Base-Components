// import { Fragment, useState, useEffect, Component } from 'react'
import { Fragment, Component } from 'react'
import Users from './Users'

import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context';

class UserFinder extends Component {
  static contextType = UsersContext; // need to be named "contextType"

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value })
  }

  // useEffect(() => {...}, [])
  componentDidMount() {
    // Send http request to get the users...
    this.setState({filteredUsers: this.context?.users})
  }

  // useEffect(() => {...}, [searchTerm])
  componentDidUpdate(prevProps, prevState) { 
    if (prevState.searchTerm !== this.state.searchTerm) { // check dependencies
      this.setState({
        filteredUsers: this.context?.users.filter(user =>
          user.name.includes(this.state.searchTerm)
        ),
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    )
  }
}
export default UserFinder



// FUNCTIONAL COMPONENT VERSION =============================
//
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     setFilteredUsers(DUMMY_USERS.filter(user => user.name.includes(searchTerm)))
//   }, [searchTerm])

//   const searchChangeHandler = event => {
//     setSearchTerm(event.target.value)
//   }

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   )
// }
// export default UserFinder
