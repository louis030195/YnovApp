import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {NewsService} from './news.service';
import {NewsOutDto} from './dto/news.out.dto';
import {NewNewsInDto} from './dto/new.news.in.dto';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get()
    async findAll(): Promise<NewsOutDto[]> {
        return await this.newsService.findAll() as NewsOutDto[];
    }

    @Post()
    async create(@Body() news: NewNewsInDto): Promise<NewsOutDto> {
        return await this.newsService.insert(news) as NewsOutDto;
    }

    @Put(':id')
    async update(@Body() newsUpdated: NewNewsInDto, @Param() params): Promise<NewsOutDto> {
        const oldNews = await this.newsService.findById(params.id);

        return await this.newsService.update(oldNews, newsUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<NewsOutDto> {
        return await this.newsService.findById(params.id);
    }
}