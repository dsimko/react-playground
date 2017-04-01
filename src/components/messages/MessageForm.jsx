import React, {Component} from 'react';

class MessageForm extends Component{
  onSubmit(e){
    e.preventDefault();
    const node = this.refs.message;
    const message = node.value;
    this.props.sendMessage(message);
    node.value = '';

  }
  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input 
            className='form-control'
            placeholder='Send Message'
            type='text'
            ref='message'
          />
        </div>
      </form>
    )
  }
}



export default MessageForm