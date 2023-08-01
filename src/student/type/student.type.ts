import { Field, Int, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class StudentType {
    @Field(type => Int)
    id:number
    @Field()
    name :  string
    @Field()
    father_name : string
    @Field()
    age : number
}