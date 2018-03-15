import {Module} from '@nestjs/common';
import {UserGroupController} from './usergroup.controller';
import {UserGroupService} from './usergroup.service';
import {UserGroup} from './entities/usergroup.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserGroup])],
    controllers: [UserGroupController],
    components: [UserGroupService],
    exports: [UserGroupService]
})
export class UserGroupModule {}