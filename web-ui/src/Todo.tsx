import React, { useState } from "react";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>(
    []
  );
  const [newTask, setNewTask] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingName, setEditingName] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditingTask = (index: number) => {
    setEditingIndex(index);
    setEditingName(tasks[index].name);
  };

  const saveTaskName = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: editingName } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingName("");
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 lg:px-24">
      <h1 className="text-4xl font-bold mb-8">Todo List</h1>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
            >
              {editingIndex === index ? (
                <input
                  type="text"
                  className="flex-grow p-2 bg-gray-700 text-white focus:outline-none"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onBlur={() => saveTaskName(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveTaskName(index);
                    }
                  }}
                />
              ) : (
                <span
                  className={`flex-grow ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {task.name}
                </span>
              )}
              <div className="flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700 transition duration-300 pl-4"
                  onClick={() => startEditingTask(index)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-700 transition duration-300"
                  onClick={() => {
                    if (editingIndex === index) {
                      setEditingIndex(null);
                    }
                    removeTask(index);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
