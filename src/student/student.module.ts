import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entity/student.entity';

@Module({
  imports : [TypeOrmModule.forFeature([StudentEntity])],
  providers: [StudentResolver, StudentService]
})
export class StudentModule {}
