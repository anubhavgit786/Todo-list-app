import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CardBody from "./components/CardBody";
import Footer from "./components/Footer";



const App = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), description, isCompleted: false };
    setTasks((tasks) => [...tasks, newTask]);
    setDescription("");
  };

  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleIsCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  
  return (
    <div className="appContainer">
      <div className="card card-shadow">
        <Header onSetTasks={setTasks} />
        <CardBody
          tasks={tasks}
          onCompleteTask={handleIsCompleted}
          onDeleteTask={handleDeleteTask}
        />
        <Footer
          description={description}
          onChangeDescription={setDescription}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
