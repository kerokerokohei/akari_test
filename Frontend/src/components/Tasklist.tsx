import React from "react";
import { useGetAllTaskQuery } from "../TaskMutation";

export interface Task {
  id: number;
  taskname: string;
  complete: boolean;
  Isdeleted: boolean;
}

const Tasklist: React.FC = () => {
  const { data: Alltasks, loading, error } = useGetAllTaskQuery();

  // ローディング状態またはエラー発生時のハンドリング
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Alltasks および Alltasks.task の存在を確認し、配列として扱う
  return (
    <>
      {Alltasks &&
        Alltasks.tasks &&
        Alltasks.tasks.map((task: Task) => (
          <div key={task.id}>
            <div>{`Task Name: ${task.taskname}`}</div>
          </div>
        ))}
    </>
  );
};

export default Tasklist;
