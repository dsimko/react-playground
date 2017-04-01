import React, {Component} from 'react';
import MessageList from './MessageList.jsx'
import MessageForm from './MessageForm.jsx'

class MessageSection extends Component{
  render(){
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Messages</strong>
        </div>
        <div className='panel-body messsages'>
          <MessageList {...this.props}/>
          <MessageForm {...this.props} />
        </div>
      </div>
      
    )
  }
}

export default MessageSection