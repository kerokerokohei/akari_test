import { CreateTaskInput } from './create-task.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => Int)
  id: number;

  @Field()
  taskname: string;

  @Field()
  complete: boolean;

  @Field()
  Isdeleted: boolean;
}
