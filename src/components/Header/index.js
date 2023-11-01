import React from "react";

const Header = ({ onSetTasks }) => 
{

  return (
    <div className="card-header bg-primary conatiner-card-header">
      <span> Todo List</span>
      <button className="btn-trash" onClick={() => onSetTasks([])}>
        <i className="fa-solid fa-trash" style={{ color: "white" }}></i>
      </button>
    </div>
  );
};

export default Header;
