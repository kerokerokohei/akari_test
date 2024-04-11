import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  taskname: string;

  @Field()
  complete: boolean;

  @Field()
  Isdeleted: boolean;
}
