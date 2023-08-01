import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/createStudent.input';
import { GetStudentResponse } from './response/student.response';
import { UpdateStudentInput } from './dto/updatestudent.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepo: Repository<StudentEntity>,
  ) {}

  createUser(createStudentInput: CreateStudentInput) {
    return this.studentRepo.save(createStudentInput);
  }

  async findAllStudents() {
    const students = await this.studentRepo.find();
    return GetStudentResponse.decode(students);
  }

  async findOne(id: number) {
    const student = await this.studentRepo.findOne({ where: { id: id } });
    return student;
  }

  async updateStudent(updateStudentInput: UpdateStudentInput) {
    let student = await this.studentRepo.findOne({
      where: { id: updateStudentInput.id },
    });
    if (!student) {
      return new ConflictException('user not found');
    }

    await this.studentRepo.update(updateStudentInput.id, updateStudentInput);
    return this.studentRepo.findOne({ where: { id: updateStudentInput.id } });
  }
}
