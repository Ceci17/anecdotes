import React from "react";
import { filterChange } from "../reducers/filterReducer";
import { connect } from "react-redux";

const Filter = ({ filterChange }) => {
  const handleChange = (event) => {
    const filter = event.target.value;
    filterChange(filter);
  };
  const style = {
    marginBottom: 10,
    marginTop: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { filterChange })(Filter);
