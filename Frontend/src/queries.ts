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
  mutation createTask($taskname: String!) {
    createTask(taskname: $taskname) {
      id
      taskname
      complete
      Isdeleted
    }
  }
`;
export const UPDATE_TASK = gql`
  mutation UpdateTask(
    $id: Int!
    $taskname: String!
    $complete: Boolean!
    $Isdeleted: Boolean!
  ) {
    updateTask(
      id: $id
      updateTaskInput: {
        id: $id
        taskname: $taskname
        complete: $complete
        Isdeleted: $Isdeleted
      }
    ) {
      id
      taskname
      complete
      Isdeleted
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
