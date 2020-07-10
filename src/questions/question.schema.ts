import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Answer } from './interfaces/question.interface';

@Schema()
export class Question extends Document {
    @Prop()
    id: string;

    @Prop()
    text: string;

    @Prop()
    answers: Answer[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);