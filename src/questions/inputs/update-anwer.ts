import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAnswerInput {
    @Field(() => String)
    answer: string;

    @Field(() => Boolean)
    isSelected: Boolean;
}

