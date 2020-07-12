import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAnswerInput {
  @Field(() => String)
  answer: string;

  @Field(() => Boolean)
  isSelected: boolean;
}

@InputType()
export class UpdateAnswerInput {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  answer: string;

  @Field(() => Boolean)
  isSelected: boolean
}
