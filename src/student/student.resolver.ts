import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './type/student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './dto/createStudent.input';
import { UpdateStudentInput } from './dto/updatestudent.input';


@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => StudentType)
  createUser(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createUser(createStudentInput);
  }

  @Query(()=>[StudentType])
  findAllStudents(){
    return this.studentService.findAllStudents()
  }

  @Query(()=> StudentType)
  findOne(@Args('id') id : number){
    return this.studentService.findOne(id)
  }

  @Mutation(()=> StudentType)
  updateStudent(@Args('updateStudentInput')  updateStudentInput : UpdateStudentInput){
      return this.studentService.updateStudent(updateStudentInput)
  }
}
