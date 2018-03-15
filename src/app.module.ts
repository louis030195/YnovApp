import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NewsModule} from './news/news.module';
import {EventModule} from "./event/event.module";
import {AppointmentModule} from "./appointment/appointment.module";
import {StudentOfficeModule} from "./studentoffice/studentoffice.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: '127.0.0.1',
          port: 3306,
          username: 'root',
          password: 'AdminDB1*',
          database: 'DB_YnovApp',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      NewsModule,
      EventModule,
      AppointmentModule,
      StudentOfficeModule
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
