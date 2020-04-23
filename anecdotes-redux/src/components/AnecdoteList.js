import React from "react";
import { connect } from "react-redux";

import { vote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteList = ({ anecdotes, filter, vote, showNotification }) => {
  const sortedAnecdotes = anecdotes.sort(
    (curr, next) => next.votes - curr.votes
  );

  const showAnecdotes = sortedAnecdotes?.filter((anecdote) =>
    anecdote?.content?.toLowerCase().includes(filter.toLowerCase())
  );

  const voteFor = (anecdote) => {
    vote(anecdote.id, anecdote);
    showNotification(`You voted for '${anecdote.content}'`, 5000);
  };

  return (
    <div>
      {showAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteFor(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { vote, showNotification })(
  AnecdoteList
);
