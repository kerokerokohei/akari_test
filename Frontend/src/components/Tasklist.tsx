import React, { useEffect } from "react";
import { useGetAllTaskQuery } from "../TaskMutation";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";
import { Task } from "../types/Task.type";

import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
} from "@mui/material";

const Tasklist: React.FC = () => {
  const { data: Alltasks, loading, error } = useGetAllTaskQuery();

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  return (
    <List>
      Todoアプリ
      {Alltasks &&
        Alltasks.tasks &&
        !Alltasks.tasks.Isdeleted &&
        Alltasks.tasks.map((task: Task) => (
          <ListItem key={task.id}>
            <ListItemText primary={`Task Name: ${task.taskname}`} />
            <CompleteButton {...task} />
            <DeleteButton {...task} />
          </ListItem>
        ))}
    </List>
  );
};

export default Tasklist;
