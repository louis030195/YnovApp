import {Module} from '@nestjs/common';
import {EventController} from './event.controller';
import {EventService} from './event.service';
import {Event} from './entities/event.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Event])],
    controllers: [EventController],
    components: [EventService],
    exports: [EventService]
})
export class EventModule {}