import { Query, Resolver } from "@nestjs/graphql";
import { CreateQuestionDto } from "./object-types/question-type.dto";
import { QuestionService } from "./question-service";

@Resolver(() => CreateQuestionDto)
export class QuestionResolver {
  constructor(private questionService: QuestionService) { }

  @Query(() => [CreateQuestionDto])
  async questions(): Promise<CreateQuestionDto[]> {
    const result = this.questionService.findAll();
    return result;
  }
}