import React from "react";
import { useCreateTaskMutation } from "../TaskMutation";

export interface Task {
  id: number;
  taskname: string;
  complete: boolean;
  Isdeleted: boolean;
}

const Taskinput: React.FC = () => {
  const [taskname, setTaskname] = React.useState("");
  const [createTask] = useCreateTaskMutation();

  const handleCreateTask = async () => {
    try {
      await createTask({
        variables: {
          createTaskInput: {
            taskname,
            complete: false,
            Isdeleted: false,
          },
        },
      });
      setTaskname("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
      />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
};

export default Taskinput;
