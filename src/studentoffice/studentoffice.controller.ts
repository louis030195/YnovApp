import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {StudentOfficeService} from './studentoffice.service';
import {StudentOfficeOutDto} from './dto/studentoffice.out.dto';
import {NewStudentOfficeInDto} from './dto/new.studentoffice.in.dto';

@Controller('studentoffice')
export class StudentOfficeController {
    constructor(private readonly studentOfficeService: StudentOfficeService) {}

    @Get()
    async findAll(): Promise<StudentOfficeOutDto[]> {
        return await this.studentOfficeService.findAll() as StudentOfficeOutDto[];
    }

    @Post()
    async create(@Body() studentOffice: NewStudentOfficeInDto): Promise<StudentOfficeOutDto> {
        return await this.studentOfficeService.insert(studentOffice) as StudentOfficeOutDto;
    }

    @Put(':id')
    async update(@Body() studentOfficeUpdated: NewStudentOfficeInDto, @Param() params): Promise<StudentOfficeOutDto> {
        const oldStudentOffice = await this.studentOfficeService.findById(params.id);

        return await this.studentOfficeService.update(oldStudentOffice, studentOfficeUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<StudentOfficeOutDto> {
        return await this.studentOfficeService.findById(params.id);
    }
}