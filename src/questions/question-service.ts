import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './question.schema';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private itemModel: Model<Question>) { }

  async findAll(): Promise<Question[]> {
    const result = await this.itemModel.find().exec();
    return result;
  }
}