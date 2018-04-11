import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserGroupService} from './usergroup.service';
import {UserGroupOutDto} from './dto/usergroup.out.dto';
import {NewUserGroupInDto} from './dto/new.usergroup.in.dto';

@Controller('usergroup')
export class UserGroupController {
    constructor(private readonly userGroupService: UserGroupService) {}

    @Get()
    async findAll(): Promise<UserGroupOutDto[]> {
        return await this.userGroupService.findAll() as UserGroupOutDto[];
    }

    @Post()
    async create(@Body() user: NewUserGroupInDto): Promise<UserGroupOutDto> {
        return await this.userGroupService.insert(user) as UserGroupOutDto;
    }

    @Put(':id')
    async update(@Body() userGroupUpdated: NewUserGroupInDto, @Param() params): Promise<UserGroupOutDto> {
        const oldUserGroup = await this.userGroupService.findById(params.id);

        return await this.userGroupService.update(oldUserGroup, userGroupUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<UserGroupOutDto> {
        return await this.userGroupService.findById(params.id);
    }

    @Delete(':id')
    async deleteById(@Param() params): Promise<void> {
        return await this.userGroupService.deleteById(params.id);
    }
}