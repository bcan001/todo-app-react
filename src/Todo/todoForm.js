/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types'; // impt

const todoForm = ({ value, onChange, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="write your todo here"
        value={value}
        onChange={onChange}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

todoForm.propTypes = {
  value: PropTypes.string.isRequired, //ptsr
  onChange: PropTypes.func.isRequired, //ptfr
  addTodo: PropTypes.func.isRequired, //ptfr
};

export default todoForm;
