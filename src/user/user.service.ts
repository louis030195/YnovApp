import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {Repository} from 'typeorm';
import {NewUserInDto} from './dto/new.user.in.dto';


@Component()
export class UserService {
    constructor( @InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({});
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOneById(id);
    }

    async insert(user: NewUserInDto): Promise<User> {
        const newUser = new User();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        return await this.userRepository.save(newUser);
    }

    async update(oldUser: User, updated_values: NewUserInDto): Promise<User> {
        const updatedUser = oldUser;

        Object.keys(updated_values).forEach((key) => {
            updatedUser[key] = updated_values[key];
        });

        return await this.userRepository.save(updatedUser)
    }

    async deleteById(id: number): Promise<void> {
        return await this.userRepository.deleteById(id);
    }

}