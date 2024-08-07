import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './Todo.style';

const Todo = ({text, onDelete}) => {
  const handleDelete = () => {
    Alert.alert(
      'Sil',
      'Bu görevi silmek istediğinizden emin misiniz?',
      [
        {text: 'İptal', style: 'cancel'},
        {
          text: 'Evet',
          onPress: () => onDelete(),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <TouchableOpacity onPress={handleDelete}>
      <View style={styles.todo_container}>
        <Text style={styles.todo_text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;
