import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserGroup} from './entities/usergroup.entity';
import {Repository} from 'typeorm';
import {NewUserGroupInDto} from './dto/new.usergroup.in.dto';
import {UserGroupController} from "./usergroup.controller";


@Component()
export class UserGroupService {
    constructor( @InjectRepository(UserGroup) private readonly userRepository: Repository<UserGroup>) {}

    async findAll(): Promise<UserGroup[]> {
        return await this.userRepository.find({});
    }

    async findById(id: number): Promise<UserGroup> {
        return await this.userRepository.findOneById(id);
    }

    async insert(userGroup: NewUserGroupInDto): Promise<UserGroup> {
        const newUser = new UserGroup();

        Object.keys(userGroup).forEach((key) => {
            newUser[key] = userGroup[key];
        });

        return await this.userRepository.save(newUser);
    }

    async update(oldUserGroup: UserGroup, updated_values: NewUserGroupInDto): Promise<UserGroup> {
        const updatedUserGroup = oldUserGroup;

        Object.keys(updated_values).forEach((key) => {
            updatedUserGroup[key] = updated_values[key];
        });

        return await this.userRepository.save(updatedUserGroup)
    }

}