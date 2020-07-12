import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import mongoose from "mongoose";
import { CreateAnswerInput, UpdateQuestionInput } from "./inputs/create-anwer-input";
import { Answer } from "./interfaces/question.interface";
import { CreateQuestionDto } from "./object-types/question-type.dto";
import { QuestionService } from "./question-service";
import { Question } from "./question.schema";

@Resolver(() => CreateQuestionDto)
export class QuestionResolver {
  constructor(private questionService: QuestionService) { }

  @Query(() => [CreateQuestionDto])
  async questions(): Promise<CreateQuestionDto[]> {
    const result = this.questionService.questions();
    return result;
  }

  @Query(() => CreateQuestionDto)
  async question(
    @Args({ name: "_id", type: () => String }) id: string)
    : Promise<CreateQuestionDto> {
    const result = this.questionService.question(id);
    return result;
  }

  @Mutation(() => CreateQuestionDto)
  async createQuestion(
    @Args({ name: "text", type: () => String }) text: string,
    @Args({ name: "answers", type: () => [CreateAnswerInput], nullable: true }) answers: Answer[],
  ): Promise<Question> {

    const result = this.questionService.createQuestion({
      text, answers: answers.map(x => {
        return {
          id: new mongoose.Types.ObjectId(),
          ...x,
        }
      })
    });

    return result;
  }

  @Mutation(() => CreateQuestionDto)
  async updateQuestion(
    @Args({ name: 'id', type: () => ID }) id: string,
    @Args({ name: "isSelected", type: () => Boolean }) isSelected: boolean,
    @Args({ name: "answer", type: () => UpdateQuestionInput }) answer: Answer
  ): Promise<Question> {
    const result = this.questionService.updateQuestion({ id: id, answer: { ...answer, isSelected: isSelected }, })


    return result;
  }
}