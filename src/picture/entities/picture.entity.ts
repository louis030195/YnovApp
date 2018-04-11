import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {News} from "../../news/entities/news.entity";
import {Event} from "../../event/entities/event.entity";

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    picId: number;

    @Column({ type: 'varchar', length: 100, nullable: true})
    image: string;


    @ManyToOne(type => News, news => news.picturesId)
    newsId: News;

    @ManyToOne(type => Event, event => event.picturesId)
    eventId: Event;

}
