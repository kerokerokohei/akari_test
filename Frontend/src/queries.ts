import { gql } from "@apollo/client";

export const GET_ALL_TASKS = gql`
  query {
    tasks {
      id
      taskname
      complete
      Isdeleted
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($createTaskInput: CreateTaskInput!) {
    createTask(createTaskInput: $createTaskInput) {
      id
      taskname
      complete
      Isdeleted
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(updateTaskInput: $updateTaskInput) {
      id
      taskname
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation RemoveTask($id: Int!) {
    removeTask(id: $id) {
      id
      taskname
      complete
      Isdeleted
    }
  }
`;

export const GET_TASK = gql`
  query GetTask($id: Int!) {
    task(id: $id) {
      id
      taskname
      complete
      Isdeleted
    }
  }
`;
