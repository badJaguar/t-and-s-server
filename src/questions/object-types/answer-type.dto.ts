import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateAnswerDto {
  @Field(() => String)
  id: string;

  @Field(() => String)
  answer: string;

  @Field(() => Boolean)
  isSelected: boolean;
}