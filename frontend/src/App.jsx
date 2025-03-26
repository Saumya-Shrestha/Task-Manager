import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import {
  Container,
  Snackbar,
  Alert,
  Typography,
  CssBaseline,
} from "@mui/material";
import "./App.css";

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const handleTaskSaved = () => {
    setTaskToEdit(null);
    setRefreshTrigger((prev) => prev + 1);
    showNotification("success", "Task saved successfully!");
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="app-container">
        <Typography variant="h3" component="h1" className="app-title">
          Task Manager
        </Typography>

        <Snackbar
          open={!!notification}
          autoHideDuration={3000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification?.type}
            className="notification-alert"
          >
            {notification?.message}
          </Alert>
        </Snackbar>

        <TaskForm
          taskToEdit={taskToEdit}
          onTaskSaved={handleTaskSaved}
          showNotification={showNotification}
        />

        <TaskList
          refreshTrigger={refreshTrigger}
          onEdit={setTaskToEdit}
          showNotification={showNotification}
        />
      </Container>
    </>
  );
};

export default App;
