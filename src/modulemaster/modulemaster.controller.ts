import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {ModuleMasterService} from './modulemaster.service';
import {ModuleMasterOutDto} from './dto/modulemaster.out.dto';
import {NewModuleMasterInDto} from './dto/new.modulemaster.in.dto';

@Controller('modulemaster')
export class ModuleMasterController {
    constructor(private readonly moduleMasterService: ModuleMasterService) {}

    @Get()
    async findAll(): Promise<ModuleMasterOutDto[]> {
        return await this.moduleMasterService.findAll() as ModuleMasterOutDto[];
    }

    @Post()
    async create(@Body() moduleMaster: NewModuleMasterInDto): Promise<ModuleMasterOutDto> {
        return await this.moduleMasterService.insert(moduleMaster) as ModuleMasterOutDto;
    }

    @Put(':id')
    async update(@Body() moduleMasterUpdated: NewModuleMasterInDto, @Param() params): Promise<ModuleMasterOutDto> {
        const oldModuleMaster = await this.moduleMasterService.findById(params.id);

        return await this.moduleMasterService.update(oldModuleMaster, moduleMasterUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<ModuleMasterOutDto> {
        return await this.moduleMasterService.findById(params.id);
    }
}