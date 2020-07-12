import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import mongoose from "mongoose";
import { UpdateQuestionInput } from "./inputs/create-answer-input";
import { CreateQuestionInput } from "./inputs/create-question-input";
import { QuestionType } from "./object-types/question-type.dto";
import { QuestionService } from "./question-service";
import { Question } from "./question.schema";

@Resolver(() => QuestionType)
export class QuestionResolver {
  constructor(private questionService: QuestionService) { }

  @Query(() => [QuestionType])
  async questions(): Promise<QuestionType[]> {
    const result = this.questionService.questions();
    return result;
  }

  @Query(() => QuestionType)
  async question(
    @Args({ name: "_id", type: () => String }) id: string)
    : Promise<QuestionType> {
    const result = this.questionService.question(id);
    return result;
  }

  @Mutation(() => QuestionType)
  async createQuestion(
    @Args("input") input: CreateQuestionInput): Promise<Question> {

    const result = this.questionService.createQuestion({
      text: input.text,
      answers: input.answers.map(x => {
        return {
          id: new mongoose.Types.ObjectId(),
          ...x,
        }
      })
    });

    return result;
  }

  @Mutation(() => QuestionType)
  async updateQuestion(
    @Args('id') id: string,
    @Args('input') input: UpdateQuestionInput): Promise<Question> {
    const result = this.questionService.updateQuestion(id, input);

    return result;
  }
}