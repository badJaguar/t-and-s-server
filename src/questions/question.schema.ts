import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAnswer } from './interfaces/question.interface';

@Schema()
export class Question extends Document {
  @Prop()
  id: string;

  @Prop()
  text: string;

  @Prop()
  answers: IAnswer[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
