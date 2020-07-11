import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import mongoose from "mongoose";
import { v4 as uuid } from 'uuid';
import { CreateAnswerInput } from "./inputs/update-anwer";
import { Answer } from "./interfaces/question.interface";
import { CreateQuestionDto } from "./object-types/question-type.dto";
import { QuestionService } from "./question-service";
import { Question } from "./question.schema";

@Resolver(() => CreateQuestionDto)
export class QuestionResolver {
  constructor(private questionService: QuestionService) { }

  @Query(() => [CreateQuestionDto])
  async questions(): Promise<CreateQuestionDto[]> {
    const result = this.questionService.findAll();
    return result;
  }

  @Mutation(() => CreateQuestionDto)
  async createQuestion(
    @Args({ name: "text", type: () => String }) text: string,
    @Args({ name: "answers", type: () => [CreateAnswerInput], nullable: true }) answers: Answer[],
  ): Promise<Question> {

    const answerId: string = uuid();

    const result = this.questionService.createQuestion({
      text, answers: answers.map(x => {
        return {
          id: new mongoose.Types.ObjectId(),
          ...x,
        }
      })
    });
    console.log(result)
    return result;
  }
}