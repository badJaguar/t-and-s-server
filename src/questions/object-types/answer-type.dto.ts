import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AnswerDto {
  @Field(() => String)
  id: string;

  @Field(() => String)
  answer: string;

  @Field(() => Boolean)
  isSelected: boolean;
}