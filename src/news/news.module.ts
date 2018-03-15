import {Module} from '@nestjs/common';
import {NewsController} from './news.controller';
import {NewsService} from './news.service';
import {News} from './entities/news.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([News])],
    controllers: [NewsController],
    components: [NewsService],
    exports: [NewsService]
})
export class NewsModule {}