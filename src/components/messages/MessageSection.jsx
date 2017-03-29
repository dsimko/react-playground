import React, {Component} from 'react';

class MessageSection extends Component{
  render(){
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Messages</strong>
        </div>
        <div className='panel-body messsages'>
          <div className='message'>
            <div className='author'>
              User 
            </div>
            <div className='body'>
              asd asd asd asd as
            </div>
          </div>  
        </div>
      </div>
      
    )
  }
}

export default MessageSection