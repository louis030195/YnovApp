import {Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import {AppointmentService} from './appointment.service';
import {AppointmentOutDto} from './dto/appointment.out.dto';
import {NewAppointmentInDto} from './dto/new.appointment.in.dto';

@Controller('appointment')
export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) {}

    @Get()
    async findAll(): Promise<AppointmentOutDto[]> {
        return await this.appointmentService.findAll() as AppointmentOutDto[];
    }

    @Post()
    async create(@Body() appointment: NewAppointmentInDto): Promise<AppointmentOutDto> {
        return await this.appointmentService.insert(appointment) as AppointmentOutDto;
    }

    @Put(':id')
    async update(@Body() appointmentUpdated: NewAppointmentInDto, @Param() params): Promise<AppointmentOutDto> {
        const oldAppointment = await this.appointmentService.findById(params.id);

        return await this.appointmentService.update(oldAppointment, appointmentUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<AppointmentOutDto> {
        return await this.appointmentService.findById(params.id);
    }

    @Delete(':id')
    async deleteById(@Param() params): Promise<void> {
        return await this.appointmentService.deleteById(params.id);
    }
}