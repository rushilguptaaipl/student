import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  father_name: string;

  @Field()
  age: number;
}
