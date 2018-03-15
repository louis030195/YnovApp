import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Event} from './entities/event.entity';
import {Repository} from 'typeorm';
import {NewEventInDto} from './dto/new.event.in.dto';


@Component()
export class EventService {
    constructor( @InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

    async findAll(): Promise<Event[]> {
        return await this.eventRepository.find({});
    }

    async findById(id: number): Promise<Event> {
        return await this.eventRepository.findOneById(id);
    }

    async insert(event: NewEventInDto): Promise<Event> {
        const newEvent = new Event();

        Object.keys(event).forEach((key) => {
            newEvent[key] = event[key];
        });

        return await this.eventRepository.save(newEvent);
    }

    async update(oldEvent: Event, updated_values: NewEventInDto): Promise<Event> {
        const updatedEvent = oldEvent;

        Object.keys(updated_values).forEach((key) => {
            updatedEvent[key] = updated_values[key];
        });

        return await this.eventRepository.save(updatedEvent)
    }

}