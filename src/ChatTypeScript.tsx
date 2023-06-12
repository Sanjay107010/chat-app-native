import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AwesomeChat from 'react-native-awesome-chat';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = {};

const ChatTypeScript = (props: Props) => {
  const messages = () => [
    {
      body: 'Hello',
      id: 1,
      timestamp: 1581418856,
      type: 'sent',
      image_uri: '',
    },
    // {
    //   body: 'Hi',
    //   id: 2,
    //   timestamp: 1581418856,
    //   type: 'received',
    //   image_uri: '',
    // },
  ];
  const recievmsg = () => [
    {
      body: 'Hi',
      id: 2,
      timestamp: 1581418856,
      type: 'received',
      image_uri: '',
    },
  ];

  return (
    <View style={{height: '100%'}}>
      <AwesomeChat
        //onSendMessage={sendMessage}
        messages={messages()}
        //If new messages come in, just update this.state.messages
        sentMessageStyle={styles.sendmsg}
        receivedMessageStyle={styles.receivemsg}
        receivedTextStyle={styles.rvtext}
        backgroundColor={styles.bgcolor}
      />
    </View>
  );
};

export default ChatTypeScript;

const styles = StyleSheet.create({
  sendmsg: {
    backgroundColor: 'green',
  },
  receivemsg: {
    backgroundColor: 'blue',
  },
  rvtext: {
    color: 'white',
  },
  bgcolor: {
    backgroundColor: 'red',
  },
});
