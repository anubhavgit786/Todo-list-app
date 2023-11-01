import React from "react";

const Footer = ({ description, onSubmit, onChangeDescription }) => 
{
  return (
    <div className="card-footer">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task"
            aria-label="Enter Task"
            aria-describedby="button-addon2"
            value={description}
            onChange={(e) => onChangeDescription(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" id="button-addon2">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Footer;
