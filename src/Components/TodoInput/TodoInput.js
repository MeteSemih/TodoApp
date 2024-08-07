import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TodoInput.styles';

const TodoInput = ({addTodo}) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Yapılacak..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button_container} onPress={handleAddTodo}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;
