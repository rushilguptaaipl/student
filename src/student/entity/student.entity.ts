import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  father_name: string;

  @Column()
  age: number;
}
