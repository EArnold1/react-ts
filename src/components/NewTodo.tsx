import React, { useRef } from 'react';

interface TodoFunc {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<TodoFunc> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const textVal = textRef.current!.value;
    props.addTodo(textVal);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" ref={textRef} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NewTodo;
