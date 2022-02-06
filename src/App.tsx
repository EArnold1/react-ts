import React, { useState } from 'react';
import { AddTodo } from './components/TodoList';
import NewTodo from './components/NewTodo';

interface Todo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoFunc = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos((preveTodos) => {
      return preveTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Add Todo</h3>
        <NewTodo addTodo={addTodoFunc} />
        <AddTodo items={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
