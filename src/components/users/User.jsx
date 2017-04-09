import React, {Component} from 'react';

class User extends Component{
  render(){
    return (
      <li>
        {this.props.user.name}
      </li>
    )
  }
}

export default User