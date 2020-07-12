import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CreateAnswerDto } from "./answer-type.dto";

@ObjectType()
export class CreateQuestionDto {
  @Field(() => ID)
  _id?: string;

  @Field(() => String)
  text: string;

  @Field(() => [CreateAnswerDto])
  answers: CreateAnswerDto[];
}
