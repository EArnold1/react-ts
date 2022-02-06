import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
}

export const AddTodo: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};