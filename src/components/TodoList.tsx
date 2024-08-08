import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({todos, onToggle, onEdit, onDelete}: TodoListProps) => {
  const renderItem = ({item}: {item: TodoItem}) => (
    <TodoItem
      id={item.id}
      text={item.text}
      completed={item.completed}
      onToggle={onToggle}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );

  const isTodoListEmpty = todos.length === 0;

  return (
    <View style={styles.container}>
      {isTodoListEmpty ? (
        <Text style={styles.emptyMessage}>
          Your todo list is empty. Add some tasks to get started!
        </Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
});

export default TodoList;
