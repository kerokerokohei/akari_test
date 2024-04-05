import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: number;
  taskname: string;
  complete: boolean;
  delete: boolean;
}
// 編集中
