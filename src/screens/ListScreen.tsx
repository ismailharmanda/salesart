import {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TodoList} from '../components';
import {load, save} from '../utils';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const ListScreen: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTodoId, setEditTodoId] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await load('todos');
      if (todos) {
        setTodos(todos);
      }
    };

    loadTodos();
  }, []);

  const saveTodos = async (newTodos: TodoItem[]) => {
    await save('todos', newTodos);
  };

  const addTodo = () => {
    if (inputText.trim().length === 0) return;

    if (isEditing && editTodoId) {
      const newTodos = todos.map(todo =>
        todo.id === editTodoId ? {...todo, text: inputText} : todo,
      );
      setTodos(newTodos);
      saveTodos(newTodos);
      setIsEditing(false);
      setEditTodoId(null);
    } else {
      const newTodo = {
        id: Date.now().toString(),
        text: inputText,
        completed: false,
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      saveTodos(newTodos);
    }
    setInputText('');
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const editTodo = (id: string, text: string) => {
    setInputText(text);
    setIsEditing(true);
    setEditTodoId(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={'#999'}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Enter a todo item"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>
            {isEditing ? 'Update' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    height: 40,
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ListScreen;
