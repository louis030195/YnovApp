import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {StudentOffice} from './entities/studentoffice.entity';
import {Repository} from 'typeorm';
import {NewStudentOfficeInDto} from './dto/new.studentoffice.in.dto';


@Component()
export class StudentOfficeService {
    constructor( @InjectRepository(StudentOffice) private readonly studentOfficeRepository: Repository<StudentOffice>) {}

    async findAll(): Promise<StudentOffice[]> {
        return await this.studentOfficeRepository.find({});
    }

    async findById(id: number): Promise<StudentOffice> {
        return await this.studentOfficeRepository.findOneById(id);
    }

    async insert(studentOffice: NewStudentOfficeInDto): Promise<StudentOffice> {
        const newStudentOffice = new StudentOffice();

        Object.keys(studentOffice).forEach((key) => {
            newStudentOffice[key] = studentOffice[key];
        });

        return await this.studentOfficeRepository.save(newStudentOffice);
    }

    async update(oldStudentOffice: StudentOffice, updated_values: NewStudentOfficeInDto): Promise<StudentOffice> {
        const updatedStudentOffice = oldStudentOffice;

        Object.keys(updated_values).forEach((key) => {
            updatedStudentOffice[key] = updated_values[key];
        });

        return await this.studentOfficeRepository.save(updatedStudentOffice)
    }

}