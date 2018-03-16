import {MiddlewaresConsumer, Module, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NewsModule} from './news/news.module';
import {EventModule} from "./event/event.module";
import {AppointmentModule} from "./appointment/appointment.module";
import {StudentOfficeModule} from "./studentoffice/studentoffice.module";
import {UserModule} from "./user/user.module";
import {UserGroupModule} from "./usergroup/usergroup.module";
import {AuthMiddleware} from "./middlewares/auth.middleware";
import {AppointmentController} from "./appointment/appointment.controller";
import {NewsController} from "./news/news.controller";
import {StudentOfficeController} from "./studentoffice/studentoffice.controller";
import {UserController} from "./user/user.controller";
import {UserGroupController} from "./usergroup/usergroup.controller";
import {EventController} from "./event/event.controller";

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
      StudentOfficeModule,
      UserModule,
      UserGroupModule
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(AuthMiddleware).forRoutes(AppointmentController);
        consumer.apply(AuthMiddleware).forRoutes(EventController);
        consumer.apply(AuthMiddleware).forRoutes(NewsController);
        consumer.apply(AuthMiddleware).forRoutes(StudentOfficeController);
        consumer.apply(AuthMiddleware).forRoutes(UserController);
        consumer.apply(AuthMiddleware).forRoutes(UserGroupController);

    }
}
