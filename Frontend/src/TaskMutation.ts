// useRemoveTaskMutation.ts
import { useMutation, useQuery } from "@apollo/client";
import {
  REMOVE_TASK,
  GET_TASK,
  GET_ALL_TASKS,
  UPDATE_TASK,
  CREATE_TASK,
} from "./queries.ts";

// タスク削除ミューテーションを実行するカスタムフック
export function useRemoveTaskMutation() {
  return useMutation(REMOVE_TASK);
}

// 任意のタスクを指定して取得するミューテーションを実行するカスタムフック
export function useGetTaskQuery(taskId: number) {
  return useQuery(GET_TASK, {
    variables: { id: taskId },
  });
}

// タスク一覧を指定して取得するミューテーションを実行するカスタムフック
export function useGetAllTaskQuery() {
  return useQuery(GET_ALL_TASKS);
}

// タスクを更新するミューテーションを実行するカスタムフック
export function useUpdateTaskMutation() {
  return useMutation(UPDATE_TASK);
}

// 新規タスクを作成するミューテーションを実行するカスタムフック
export function useCreateTaskMutation() {
  return useMutation(CREATE_TASK);
}
