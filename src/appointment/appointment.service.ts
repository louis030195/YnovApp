import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Appointment} from './entities/appointment.entity';
import {Repository} from 'typeorm';
import {NewAppointmentInDto} from './dto/new.appointment.in.dto';


@Component()
export class AppointmentService {
    constructor( @InjectRepository(Appointment) private readonly appointmentRepository: Repository<Appointment>) {}

    async findAll(): Promise<Appointment[]> {
        return await this.appointmentRepository.find({});
    }

    async findById(id: number): Promise<Appointment> {
        return await this.appointmentRepository.findOneById(id);
    }

    async insert(appointment: NewAppointmentInDto): Promise<Appointment> {
        const newAppointment = new Appointment();

        Object.keys(appointment).forEach((key) => {
            newAppointment[key] = appointment[key];
        });

        return await this.appointmentRepository.save(newAppointment);
    }

    async update(oldAppointment: Appointment, updated_values: NewAppointmentInDto): Promise<Appointment> {
        const updatedAppointment = oldAppointment;

        Object.keys(updated_values).forEach((key) => {
            updatedAppointment[key] = updated_values[key];
        });

        return await this.appointmentRepository.save(updatedAppointment)
    }

    async deleteById(id: number): Promise<void> {
        return await this.appointmentRepository.deleteById(id);
    }

}