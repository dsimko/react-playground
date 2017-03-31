import React, {Component} from 'react';
import ChannelSection from './components/channels/ChannelSection.jsx';
import UserSection from './components/users/UserSection.jsx';
import MessageSection from './components/messages/MessageSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: []
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({
      id: channels.length, 
      name, 
      messages: [{id: 0, body: 'message 1'}, {id:1, body: 'message 2'}],
      users: [{id: 0, name: 'user 1'}, {id:1, name: 'user 2'}]
    });
    this.setState({channels});
    // TODO: Send to server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // TODO: Get Channels Messages
  }
  addUser(name){
    let {activeChannel} = this.state;
    activeChannel.users.push({id: activeChannel.users.length, name});
    this.setState({activeChannel});
    // TODO: Send to server
  }
  setUser(activeUser){
    this.setState({activeUser});
  }
  render(){
    return (
      <div className='app'>
          <div className='nav'>
            <ChannelSection 
              {...this.state}
              addChannel={this.addChannel.bind(this)}
              setChannel={this.setChannel.bind(this)}
            />
            <UserSection 
              {...this.state}
              addUser={this.addUser.bind(this)}
              setUser={this.setUser.bind(this)}
            />
          </div>
          <div className='messages-container'>
            <MessageSection 
              {...this.state}
            />
          </div>
      </div>

      
    )
  }
}

export default App