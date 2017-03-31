import React, {Component} from 'react';
import User from './User.jsx'

class UserList extends Component{
  render(){
    const {activeChannel} = this.props;
    const users = activeChannel ? activeChannel.users : []
    return (
      <ul>{
        users.map( user =>{
          return <User 
            user={user}
            key={user.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

export default UserList