import {Module} from '@nestjs/common';
import {ModuleMasterController} from './modulemaster.controller';
import {ModuleMasterService} from './modulemaster.service';
import {ModuleMaster} from './entities/modulemaster.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ModuleMaster])],
    controllers: [ModuleMasterController],
    components: [ModuleMasterService],
    exports: [ModuleMasterService]
})
export class ModuleMasterModule {}