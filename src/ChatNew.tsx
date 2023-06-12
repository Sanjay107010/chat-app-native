import React, {Component} from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import AwesomeChat from 'react-native-awesome-chat';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class ChatN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          body: 'Hello',
          id: 1,
          timestamp: 1581418856,
          type: 'sent',
          image_uri: '',
        },
        {
          body: 'Hi',
          id: 2,
          timestamp: 1581418856,
          type: 'received',
          image_uri: '',
        },
      ],
    };
  }

  // AwesomeChat will pass the message object to this function
  sendMessage = async message => {
    let response = await axios.post(/*POST request to your DB*/);
    if (response.ok) {
      return true;
    } else {
      return false; //AwesomeChat will flag the message as unsent
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{height: '100%'}}>
            <AwesomeChat
              onSendMessage={this.sendMessage}
              messages={this.state.messages}
              //If new messages come in, just update this.state.messages
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default ChatN;
