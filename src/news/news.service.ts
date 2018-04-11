import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {News} from './entities/news.entity';
import {Repository} from 'typeorm';
import {NewNewsInDto} from './dto/new.news.in.dto';


@Component()
export class NewsService {
    constructor( @InjectRepository(News) private readonly newsRepository: Repository<News>) {}

    async findAll(): Promise<News[]> {
        return await this.newsRepository.find({});
    }

    async findById(id: number): Promise<News> {
        return await this.newsRepository.findOneById(id);
    }

    async insert(news: NewNewsInDto): Promise<News> {
        const newNews = new News();

        Object.keys(news).forEach((key) => {
            newNews[key] = news[key];
        });

        return await this.newsRepository.save(newNews);
    }

    async update(oldNews: News, updated_values: NewNewsInDto): Promise<News> {
        const updatedNews = oldNews;

        Object.keys(updated_values).forEach((key) => {
            updatedNews[key] = updated_values[key];
        });

        return await this.newsRepository.save(updatedNews)
    }

    async deleteById(id: number): Promise<void> {
        return await this.newsRepository.deleteById(id);
    }

}