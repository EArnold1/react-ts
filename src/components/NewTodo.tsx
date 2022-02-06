import React, { useRef } from 'react';

interface TodoFunc {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<TodoFunc> = (props) => {
  const { addTodo } = props;
  const textRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const textVal = textRef.current!.value;
    addTodo(textVal);
    textRef.current!.value = '';
  };

  return (
    <div className="mt-4">
      <form onSubmit={submitForm} className="form-group">
        <input
          type="text"
          placeholder="insert todo"
          className="form-control"
          ref={textRef}
        />
        <br />
        <input
          type="submit"
          className="btn btn-warning btn-block"
          value="Add"
        />
      </form>
    </div>
  );
};

export default NewTodo;
