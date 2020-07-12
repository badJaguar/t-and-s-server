import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateAnswerInput } from './inputs/create-answer-input';
import { CreateQuestionInput } from './inputs/create-question-input';
import { Question } from './question.schema';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private itemModel: Model<Question>) { }

  async questions(): Promise<Question[]> {
    const result = await this.itemModel.find().exec();
    return result;
  }

  async question(id: string): Promise<Question> {
    const result = await this.itemModel.findOne({ _id: id });
    return result;
  }

  async createQuestion(createQuestionDto: CreateQuestionInput): Promise<Question> {
    const createQuestion = new this.itemModel(createQuestionDto);
    return createQuestion.save();
  }

  async updateQuestion(id: string, item: UpdateAnswerInput): Promise<Question> {

    const doc = await this.itemModel.findById(id);

    doc.answers.filter(x => x?.id?.toString() === item.id).map(x => {

      return {
        ...x,
        isSelected: x.isSelected = item.isSelected
      }
    })

    return doc.save();
  }
}