import React from "react";
import { useGetAllTaskQuery } from "../TaskMutation";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
} from "@mui/material";

export interface Task {
  id: number;
  taskname: string;
  complete: boolean;
  Isdeleted: boolean;
}

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
      {Alltasks &&
        Alltasks.tasks &&
        Alltasks.tasks.map((task: Task) => (
          <ListItem key={task.id}>
            <ListItemText primary={`Task Name: ${task.taskname}`} />
          </ListItem>
        ))}
    </List>
  );
};

export default Tasklist;
