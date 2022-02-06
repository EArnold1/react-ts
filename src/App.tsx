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

  return (
    <div className="App">
      <NewTodo addTodo={addTodoFunc} />
      <AddTodo items={todos} />
    </div>
  );
};

export default App;
