import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../common';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onEdit,
  onDelete,
}) => (
  <View style={styles.todoItem}>
    <Text style={[styles.todoText, completed ? styles.completed : undefined]}>
      {text}
    </Text>
    <View style={styles.todoActions}>
      <Button
        onPress={() => onToggle(id)}
        title={completed ? 'Undo' : 'Complete'}
      />
      <Button onPress={() => onEdit(id, text)} title="Edit" />
      <Button
        onPress={() => onDelete(id)}
        title="Delete"
        textStyle={styles.deleteButtonText}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    flexWrap: 'wrap',
    width: '40%',
    color: '#333',
  },
  todoActions: {
    flexDirection: 'row',
    gap: 8,
  },
  todoAction: {
    marginLeft: 10,
    color: '#007bff',
  },
  deleteButtonText: {
    color: '#ff0000',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
