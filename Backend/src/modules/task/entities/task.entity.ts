import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: number;
  taskname: string;
  complete: boolean;
  Isdeleted: boolean;
}
@ObjectType()
export class Tasks {
  tasks: Task[];
}
