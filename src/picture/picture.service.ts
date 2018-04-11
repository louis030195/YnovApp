import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Picture} from './entities/picture.entity';
import {Repository} from 'typeorm';
import {NewPictureInDto} from './dto/new.picture.in.dto';


@Component()
export class PictureService {
    constructor( @InjectRepository(Picture) private readonly pictureRepository: Repository<Picture>) {}

    async findAll(): Promise<Picture[]> {
        return await this.pictureRepository.find({});
    }

    async findById(id: number): Promise<Picture> {
        return await this.pictureRepository.findOneById(id);
    }

    async insert(picture: NewPictureInDto): Promise<Picture> {
        const newPicture = new Picture();

        Object.keys(picture).forEach((key) => {
            newPicture[key] = picture[key];
        });

        return await this.pictureRepository.save(newPicture);
    }

    async update(oldPicture: Picture, updated_values: NewPictureInDto): Promise<Picture> {
        const updatedPicture = oldPicture;

        Object.keys(updated_values).forEach((key) => {
            updatedPicture[key] = updated_values[key];
        });

        return await this.pictureRepository.save(updatedPicture)
    }

    async deleteById(id: number): Promise<void> {
        return await this.pictureRepository.deleteById(id);
    }

}