import React, {Component} from 'react';

class UserList extends Component{
  render(){
    return (
      <ul>{
        this.props.users.map( user =>{
          return <li>user</li>
        })
      }</ul>
    )
  }
}

export default UserList