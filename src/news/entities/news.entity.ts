import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "../../user/entities/user.entity";
import {Picture} from "../../picture/entities/picture.entity";

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    newsId: number;

    @Column({ type: 'varchar', length: 255, nullable: true})
    category: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    title: string;

    @Column({ type: 'varchar', length: 1000, nullable: true})
    description: string;

    @OneToOne(type => User)
    authorId: number;

    @Column({ type: 'date', default: null})
    creationDate: Date;

    @OneToMany(type => Picture, picture => picture.picId)
    picturesId: Picture[];
}
