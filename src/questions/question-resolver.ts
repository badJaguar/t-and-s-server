import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import mongoose from "mongoose";
import { UpdateQuestionInput } from "./inputs/create-anwer-input";
import { CreateQuestionInput } from "./inputs/create-question-input";
import { CreateQuestionDto } from "./object-types/create-question-type.dto";
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

  @Mutation(() => CreateQuestionDto)
  async updateQuestion(
    @Args('id') id: string,
    @Args('input') input: UpdateQuestionInput): Promise<Question> {
    const result = this.questionService.updateQuestion(id, input);

    return result;
  }
}