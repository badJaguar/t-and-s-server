import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    MongooseModule.forRoot(process.env.CONNECTION_STRING)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
