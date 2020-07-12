import { Field, InputType } from "@nestjs/graphql";
import { CreateAnswerInput } from "./create-answer-input";

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  text: string;

  @Field(() => [CreateAnswerInput], { nullable: true })
  answers: CreateAnswerInput[];
}
