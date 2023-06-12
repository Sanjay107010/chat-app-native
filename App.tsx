import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatScreen1 from './src/Demo';
import ToDoList from './src/ToDoList';

type Props = {};

const App = (props: Props) => {
  return (
    <View>
      {/* <ChatN /> */}
      {/* <ChatTypeScript /> */}
      {/* <ChatScreen1 /> */}
      <ToDoList navigation={undefined} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
