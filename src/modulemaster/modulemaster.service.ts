import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ModuleMaster} from './entities/modulemaster.entity';
import {Repository} from 'typeorm';
import {NewModuleMasterInDto} from './dto/new.modulemaster.in.dto';


@Component()
export class ModuleMasterService {
    constructor( @InjectRepository(ModuleMaster) private readonly moduleMasterRepository: Repository<ModuleMaster>) {}

    async findAll(): Promise<ModuleMaster[]> {
        return await this.moduleMasterRepository.find({});
    }

    async findById(id: number): Promise<ModuleMaster> {
        return await this.moduleMasterRepository.findOneById(id);
    }

    async insert(moduleMaster: NewModuleMasterInDto): Promise<ModuleMaster> {
        const newModuleMaster = new ModuleMaster();

        Object.keys(moduleMaster).forEach((key) => {
            newModuleMaster[key] = moduleMaster[key];
        });

        return await this.moduleMasterRepository.save(newModuleMaster);
    }

    async update(oldModuleMaster: ModuleMaster, updated_values: NewModuleMasterInDto): Promise<ModuleMaster> {
        const updatedModuleMaster = oldModuleMaster;

        Object.keys(updated_values).forEach((key) => {
            updatedModuleMaster[key] = updated_values[key];
        });

        return await this.moduleMasterRepository.save(updatedModuleMaster)
    }

    async deleteById(id: number): Promise<void> {
        return await this.moduleMasterRepository.deleteById(id);
    }

}