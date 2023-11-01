import React from "react";

const CardBody = ({ tasks, onCompleteTask, onDeleteTask }) => 
{
  return (
    <div className="card-body">
      <ul className="list-group list-group-flush">
        {tasks.map((list) => (
          <li
            key={list.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={list.isCompleted}
                onChange={() => onCompleteTask(list.id)}
                id={`flexCheckChecked${list.id}`}
                checked={list.isCompleted}
              />
              <label
                className={`form-check-label ${
                  list.isCompleted ? "taskCompleted" : ""
                }`}
                for={`flexCheckChecked${list.id}`}
              >
                {list.description}
              </label>
            </div>
            <div>
              {list.isCompleted && (
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => onDeleteTask(list.id)}
                >
                  <span aria-hidden="true"></span>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardBody;
