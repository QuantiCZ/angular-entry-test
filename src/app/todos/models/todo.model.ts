export enum Status {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface Todo {
  id: number;
  name: string;
  description: string;
  status: Status;
  //TODO: parse date from string and to string
  dueDate: string;
  created: string;
  //TODO: this will be user id
  assignee: number;
}
