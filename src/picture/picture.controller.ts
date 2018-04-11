import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {PictureService} from './picture.service';
import {PictureOutDto} from './dto/picture.out.dto';
import {NewPictureInDto} from './dto/new.picture.in.dto';

@Controller('picture')
export class PictureController {
    constructor(private readonly pictureService: PictureService) {}

    @Get()
    async findAll(): Promise<PictureOutDto[]> {
        return await this.pictureService.findAll() as PictureOutDto[];
    }

    @Post()
    async create(@Body() picture: NewPictureInDto): Promise<PictureOutDto> {
        return await this.pictureService.insert(picture) as PictureOutDto;
    }

    @Put(':id')
    async update(@Body() pictureUpdated: NewPictureInDto, @Param() params): Promise<PictureOutDto> {
        const oldPicture = await this.pictureService.findById(params.id);

        return await this.pictureService.update(oldPicture, pictureUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<PictureOutDto> {
        return await this.pictureService.findById(params.id);
    }
}