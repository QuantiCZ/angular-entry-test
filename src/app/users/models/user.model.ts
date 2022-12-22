export enum Position {
  husband = "husband",
  wife = "wife",
}

export interface User {
  id: number;
  firstName: string;
  surname: string;
  position: Position;
}
