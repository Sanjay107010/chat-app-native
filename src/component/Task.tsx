import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  Value1: any;
};

const Task = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>{props.Value1}</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    backgroundColor: 'green',
  },
});
