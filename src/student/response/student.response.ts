import { plainToClass, Transform } from "class-transformer";



export class GetStudentResponse {
    id: number;
    name: string;
    father_name: string;
    age: number;
   
    static decode(input: any ): GetStudentResponse {
        console.log(plainToClass(this, input));
        
        return plainToClass(this, input);
    }
}

export class RemoveStudentResponse {
    response : string;
     static decode(input: any ): RemoveStudentResponse {
        
        
        return plainToClass(this, input);
    }
}