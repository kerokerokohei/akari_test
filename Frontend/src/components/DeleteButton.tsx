import React from "react";
import { useRemoveTaskMutation } from "../TaskMutation";
import { Task } from "./Tasklist";

const DeleteButton: React.FC<Task> = ({
  id,
  taskname,
  complete,
  Isdeleted,
}) => {
  const [deleteteTask, { error }] = useRemoveTaskMutation();

  const handleDeleteTask = async () => {
    try {
      const response = await deleteteTask({
        variables: {
          id: Number(id),
        },
      });
      if (response.data) {
        console.log("Task deleted successfully:", response.data);
      }
    } catch (err) {
      console.error("Error delete task: ", err);
    }
  };

  return (
    <button onClick={handleDeleteTask} style={{ marginLeft: "10px" }}>
      Delete
    </button>
  );
};

export default DeleteButton;
