import React, {Component} from 'react';
import ChannelSection from './components/channels/ChannelSection.jsx';
import UserSection from './components/users/UserSection.jsx';
import MessageSection from './components/messages/MessageSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      connected: false
    };
  }
  componentDidMount(){
    let ws = this.ws = new WebSocket('ws://echo.websocket.org/');
    ws.onmessage = this.message.bind(this);
    ws.onopen = this.open.bind(this);
    ws.onclose = this.close.bind(this);
  }

  message(e){
    const event = JSON.parse(e.data);
    if(event.name === 'channel add'){
      this.newChannel(event.data);
    }
  }

  open(){
    this.setState({connected: true});
  }

  close(){
    this.setState({connected: false});
  }

  newChannel(channel){
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }

  addChannel(name){
    let {channels} = this.state;
    let msg = {
      name: "channel add",
      data: {
         id: channels.length,
         name
      }
    }
    this.ws.send(JSON.stringify(msg));
  }
  setChannel(activeChannel){
    this.setState({activeChannel, activeUser: {}});
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
  sendMessage(message){
    let {activeChannel, activeUser} = this.state;
    activeChannel.messages.push({
      id: activeChannel.messages.length,
      body: message,
      author: activeUser.name,
      createdAt: new Date()
    })
    this.setState({activeChannel});
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
              sendMessage={this.sendMessage.bind(this)}
            />
          </div>
      </div>

      
    )
  }
}

export default App