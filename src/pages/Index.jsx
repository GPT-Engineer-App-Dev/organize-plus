import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([{ id: Date.now(), text: newTask }, ...tasks]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditingTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const saveTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editingTaskText } : task
      )
    );
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add New Task</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-2">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task description"
          />
          <Button onClick={addTask}>Add Task</Button>
        </CardContent>
      </Card>
      <div className="space-y-2">
        {tasks.map((task) => (
          <Card key={task.id} className="flex items-center justify-between p-2">
            {editingTaskId === task.id ? (
              <Input
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                className="flex-grow mr-2"
              />
            ) : (
              <span className="flex-grow">{task.text}</span>
            )}
            {editingTaskId === task.id ? (
              <Button onClick={() => saveTask(task.id)} className="ml-2">
                Save
              </Button>
            ) : (
              <Button
                onClick={() => startEditingTask(task.id, task.text)}
                className="ml-2"
              >
                Edit
              </Button>
            )}
            <Button onClick={() => deleteTask(task.id)} variant="destructive" className="ml-2">
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;