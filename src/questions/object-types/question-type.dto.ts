import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateQuestionDto {
  @Field(() => ID)
  id?: string

  @Field(() => String)
  text: string;
}