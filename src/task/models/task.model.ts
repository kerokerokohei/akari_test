import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: number;
  taskname: string;
  complete: boolean;
  isDeleted: boolean;
}
// 編集中
