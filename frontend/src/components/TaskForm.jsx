import React, { useEffect, useState } from "react";
import { createTask, updateTask } from "../api/tasks";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./TaskForm.css";

const TaskForm = ({ taskToEdit, onTaskSaved, showNotification }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTask(taskToEdit || { title: "", description: "", completed: false });
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (task.id) {
        await updateTask(task.id, task);
      } else {
        await createTask(task);
      }
      onTaskSaved();
      setTask({ title: "", description: "", completed: false });
    } catch (error) {
      showNotification(
        error,
        task.id ? "Failed to update task" : "Failed to create task"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className="task-form-container">
      <Typography variant="h5" className="task-form-title">
        {task.id ? "Edit Task" : "New Task"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="task-form">
        <TextField
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          fullWidth
        />

        <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          multiline
          rows={4}
          disabled={isSubmitting}
          fullWidth
        />

        <Box className="form-actions">
          {task.id && (
            <Button
              type="button"
              variant="outlined"
              onClick={() => onTaskSaved()}
              disabled={isSubmitting}
              className="cancel-button"
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting
              ? "Saving..."
              : task.id
              ? "Update Task"
              : "Create Task"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskForm;
