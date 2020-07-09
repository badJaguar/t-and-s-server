import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';

require('dotenv').config()
const dbConnectionString = process.env.DB_CONNECTION_STRING

@Module({
  imports: [
    QuestionsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),

    MongooseModule.forRoot(dbConnectionString)
  ],
})
export class AppModule { }
