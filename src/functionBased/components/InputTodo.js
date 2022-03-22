import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const addTodoProps = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(inputText.title);
    if (inputText.title.trim()) {
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
