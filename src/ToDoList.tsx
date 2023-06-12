import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Task from './component/Task';

type Props = {
  navigation: any;
};

const ToDoList = (props: Props) => {
  const [task, settask] = useState('');
  const [addItem, setAddItem] = useState([]);

  const AddTask = () => {
    console.log(task);
    setAddItem([...addItem, task]);
    settask(null);
  };

  const ComplateTask = index => {
    console.log(':::::::::::::::::::::::::::::::', index);
    let itemcopy = [...addItem];
    itemcopy.splice(index, 1);
    setAddItem(itemcopy);
  };
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: '900',
          }}>
          ToDoList
        </Text>
        <View style={styles.List}>
          {addItem.map((item, index) => {
            console.log('first', index);
            return (
              <TouchableOpacity key={index} onPress={() => ComplateTask(index)}>
                <Task Value1={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
        }}>
        <TextInput
          placeholder="add new Task"
          style={styles.input}
          value={task}
          onChangeText={text => settask(text)}
        />
        <TouchableOpacity onPress={() => AddTask()}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '87%',
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    //   alignContent: 'space-between',
    // justifyContent: 'space-between',
    // paddingHorizontal: 10,
    borderRadius: 20,
    width: '85%',
  },
  text: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 15,
    fontSize: 25,
    borderRadius: 60,
  },
  List: {
    margin: 15,
    gap: 10,
  },
});
