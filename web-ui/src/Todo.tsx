import React, { useState, useEffect } from "react";
import axios from "axios";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface User {
  email: string;
  token: string;
}

const Todo: React.FC<{ user: User | null }> = ({ user }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingName, setEditingName] = useState<string>("");

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        try {
          const response = await axios.get("http://localhost:8001/api/tasks", {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
      fetchTasks();
    }
  }, [user]);

  const addTask = async () => {
    if (user) {
      try {
        const response = await axios.post(
          "http://localhost:8001/api/tasks",
          { name: newTask, completed: false },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setTasks([...tasks, response.data]);
        setNewTask("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const updateTask = async (id: string, name: string, completed: boolean) => {
    if (user) {
      try {
        await axios.put(
          `http://localhost:8001/api/tasks/${id}`,
          { name, completed },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, name, completed } : task
          )
        );
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  const deleteTask = async (id: string) => {
    if (user) {
      try {
        await axios.delete(`http://localhost:8001/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTasks(tasks.filter((task) => task.id !== id));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 lg:px-24">
      <h1 className="text-4xl font-bold mb-8">Todo List</h1>
      {user ? (
        <div className="w-full max-w-md">
          <div className="flex mb-4">
            <input
              type="text"
              className="p-2 flex-grow rounded bg-gray-800 text-white focus:outline-none"
              placeholder="New Task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-700 transition duration-300"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={task.id}
                className="flex items-center justify-between bg-gray-800 p-4 rounded"
              >
                {editingIndex === index ? (
                  <input
                    type="text"
                    className="p-2 flex-grow rounded bg-gray-700 text-white focus:outline-none"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                  />
                ) : (
                  <span className="flex-grow">{task.name}</span>
                )}
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-700 transition duration-300"
                  onClick={() =>
                    editingIndex === index
                      ? updateTask(task.id, editingName, task.completed)
                      : setEditingIndex(index)
                  }
                >
                  {editingIndex === index ? "Save" : "Edit"}
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-700 transition duration-300"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please sign in to manage your tasks.</p>
      )}
    </div>
  );
};

export default Todo;
