import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component{
  render(){
    const {activeChannel} = this.props;
    const messages = activeChannel ? activeChannel.messages : []
    return (
      <ul>{
        messages.map( msg =>{
          return <Message 
            message={msg}
          />
        })
      }</ul>
    )
  }
}

export default MessageList