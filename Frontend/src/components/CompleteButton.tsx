import React from "react";
import { useUpdateTaskMutation } from "../TaskMutation";

interface Task {
  id: number;
  taskname: string;
  complete: boolean;
  Isdeleted: boolean;
}

const CompleteButton: React.FC<Task> = ({
  id,
  taskname,
  complete,
  Isdeleted,
}) => {
  const [updateTask] = useUpdateTaskMutation();

  const handleCompleteTask = async () => {
    try {
      const response = await updateTask({
        variables: {
          updateTaskInput: {
            id: Number(id),
            taskname,
            complete: !complete,
            Isdeleted,
          },
        },
      });
      if (response.data) {
        console.log("Task updated successfully:", response.data);
      }
    } catch (err) {
      console.error("Error updating task: ", err);
    }
  };

  return (
    <button onClick={handleCompleteTask} style={{ marginLeft: "10px" }}>
      {complete ? "完了" : "未完了"}
    </button>
  );
};

export default CompleteButton;
