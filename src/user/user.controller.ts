import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from './user.service';
import {UserOutDto} from './dto/user.out.dto';
import {NewUserInDto} from './dto/new.user.in.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<UserOutDto[]> {
        return await this.userService.findAll() as UserOutDto[];
    }

    @Post()
    async create(@Body() user: NewUserInDto): Promise<UserOutDto> {
        return await this.userService.insert(user) as UserOutDto;
    }

    @Put(':id')
    async update(@Body() userUpdated: NewUserInDto, @Param() params): Promise<UserOutDto> {
        const oldUser = await this.userService.findById(params.id);

        return await this.userService.update(oldUser, userUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<UserOutDto> {
        return await this.userService.findById(params.id);
    }

    @Delete(':id')
    async deleteById(@Param() params): Promise<void> {
        return await this.userService.deleteById(params.id);
    }
}