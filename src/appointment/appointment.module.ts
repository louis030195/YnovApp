import {Module} from '@nestjs/common';
import {AppointmentController} from './appointment.controller';
import {AppointmentService} from './appointment.service';
import {Appointment} from './entities/appointment.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Appointment])],
    controllers: [AppointmentController],
    components: [AppointmentService],
    exports: [AppointmentService]
})
export class AppointmentModule {}