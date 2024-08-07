import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import TodoInput from './src/Components/TodoInput/TodoInput';
import Todo from './src/Components/Todo/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = index => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const renderTodo = ({item, index}) => (
    <Todo text={item} onDelete={() => removeTodo(index)} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.head_title}>Yapılacaklar</Text>
        <Text style={styles.head_count}>{todos.length}</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
        style={styles.todoContainer}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <View style={styles.inputContainer}>
        <TodoInput addTodo={addTodo} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#494949',
  },
  head: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  head_title: {
    color: '#ea9c0c',
    fontSize: 40,
    fontWeight: 'bold',
  },
  head_count: {
    color: '#ea9c0c',
    fontSize: 40,
  },
  todoContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  inputContainer: {
    padding: 10,
  },
});
