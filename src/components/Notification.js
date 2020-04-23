import React from "react";
import { connect } from "react-redux";

const Notification = ({ notifications }) => {
  console.log("Notification -> notification", notifications);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  if (notifications) {
    return <div style={style}>{notifications}</div>;
  }
  return null;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    notifications: state.notifications.message,
  };
};

export default connect(mapStateToProps)(Notification);
