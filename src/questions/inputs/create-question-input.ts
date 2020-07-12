import { Field, ID, InputType } from "@nestjs/graphql";
import { CreateAnswerInput, UpdateAnswerInput } from "./create-answer-input";

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  text: string;

  @Field(() => [CreateAnswerInput], { nullable: true })
  answers: CreateAnswerInput[];
}

@InputType()
export class UpdateQuestionInput {
  @Field(() => ID)
  _id: string;

  @Field(() => [UpdateAnswerInput], { nullable: true })
  answers: UpdateAnswerInput[];
}