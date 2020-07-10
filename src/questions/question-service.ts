import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './object-types/question-type.dto';
import { Question } from './question.schema';

@Injectable()
export class QuestionService {
    constructor(@InjectModel(Question.name) private itemModel: Model<Question>) { }

    async findAll(): Promise<Question[]> {
        const result = await this.itemModel.find().exec();
        return result;
    }

    async createQuestion(createQuestionDto: CreateQuestionDto): Promise<Question> {
        const createQuestion = new this.itemModel(createQuestionDto);
        return createQuestion.save();
    }
}