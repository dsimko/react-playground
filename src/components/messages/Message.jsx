import React, {Component} from 'react';

class Message extends Component{
  render(){
    const {message} = this.props;
    return (
      <div className='message'>
         <div className='author'>{message.author}</div>
         <div className='body'>{message.body}</div>
      </div>
    )
  }
}

export default Message