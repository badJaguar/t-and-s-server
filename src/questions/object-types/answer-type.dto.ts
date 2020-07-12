import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AnswerType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  answer: string;

  @Field(() => Boolean)
  isSelected: boolean;
}