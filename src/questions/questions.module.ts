import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionResolver } from './question-resolver';
import { QuestionService } from './question-service';
import { Question, QuestionSchema } from './question.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema, collection: "questions" }])],
  providers: [QuestionResolver, QuestionService],
})
export class QuestionsModule { }
