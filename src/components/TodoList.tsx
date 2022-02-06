import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

export const AddTodo: React.FC<TodoListProps> = (props) => {
  const { items, deleteTodo } = props;

  return (
    <div>
      <ul className="list-group">
        {items.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.text}{' '}
            <span
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              del
            </span>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
