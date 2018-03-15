import {Module} from '@nestjs/common';
import {StudentOfficeController} from './studentoffice.controller';
import {StudentOfficeService} from './studentoffice.service';
import {StudentOffice} from './entities/studentoffice.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([StudentOffice])],
    controllers: [StudentOfficeController],
    components: [StudentOfficeService],
    exports: [StudentOfficeService]
})
export class StudentOfficeModule {}