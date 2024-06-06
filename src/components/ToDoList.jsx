import React, { useState } from "react"


function ToDoList() {

    const [tasks, setTasks] = useState(['Study', 'Go to the Gym', 'Walk the Dog']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-do-List</h1>

            <div className="input-div">

                <input type="text" placeholder="Enter a task..."
                    value={newTask} onChange={handleInputChange} />

                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            {tasks.length === 0 ? (
                <h3>No tasks created yet...</h3>
            ) : (
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className="text">
                                {task}
                            </span>
                            <button className="move-btn"
                                onClick={() => moveUp(index)}>⬆️</button>
                            <button className="move-btn"
                                onClick={() => moveDown(index)}>⬇️</button>
                            <button className="delete-btn"
                                onClick={() => deleteTask(index)}>✖️</button>
                        </li>
                    ))}
                </ol>
            )}

        </div>
    )
}

export default ToDoList