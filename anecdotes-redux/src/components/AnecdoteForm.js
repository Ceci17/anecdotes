import React from "react";
import { connect } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteForm = ({ createAnecdote, showNotification }) => {
  const addAnecodote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    createAnecdote(content);
    showNotification("Successfully created anecdote", 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecodote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default connect(null, { createAnecdote, showNotification })(
  AnecdoteForm
);
