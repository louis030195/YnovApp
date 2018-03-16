import {Body, Controller, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {EventService} from './event.service';
import {EventOutDto} from './dto/event.out.dto';
import {NewEventInDto} from './dto/new.event.in.dto';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    async findAll(): Promise<EventOutDto[]> {
        return await this.eventService.findAll() as EventOutDto[];
    }

    @Post()
    async create(@Body() event: NewEventInDto): Promise<EventOutDto> {
        return await this.eventService.insert(event) as EventOutDto;
    }

    @Put(':id')
    async update(@Body() eventUpdated: NewEventInDto, @Param() params): Promise<EventOutDto> {
        const oldEvent = await this.eventService.findById(params.id);

        return await this.eventService.update(oldEvent, eventUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<EventOutDto> {
        return await this.eventService.findById(params.id);
    }
}