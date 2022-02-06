import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

export const AddTodo: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={props.deleteTodo.bind(null, todo.id)}>del</button>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
