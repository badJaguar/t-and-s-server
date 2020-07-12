import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AnswerType } from "./answer-type.dto";

@ObjectType()
export class QuestionType {
  @Field(() => ID)
  _id?: string;

  @Field(() => String)
  text: string;

  @Field(() => [AnswerType])
  answers: AnswerType[];
}
