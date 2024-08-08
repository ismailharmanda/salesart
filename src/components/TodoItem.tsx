import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
      <TouchableOpacity onPress={() => onToggle(id)}>
        <Text style={styles.todoAction}>{completed ? 'Undo' : 'Complete'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onEdit(id, text)}>
        <Text style={styles.todoAction}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Text style={[styles.todoAction, styles.deleteAction]}>Delete</Text>
      </TouchableOpacity>
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
  },
  todoActions: {
    flexDirection: 'row',
  },
  todoAction: {
    marginLeft: 10,
    color: '#007bff',
  },
  deleteAction: {
    color: '#ff0000',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
