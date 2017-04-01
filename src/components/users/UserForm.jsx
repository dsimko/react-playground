import React, {Component} from 'react';

class UserForm extends Component{
  onSubmit(e){
    e.preventDefault();
    const node = this.refs.user;
    const userName = node.value;
    this.props.addUser(userName);
    node.value = '';
  }
  render(){
    let input;
    if(this.props.activeChannel !== undefined){
      input = (
          <input 
            className='form-control'
            placeholder='Add User'
            type='text'
            ref='user'
          />
      )
    }
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          {input}
        </div>
      </form>
    )
  }
}

export default UserForm