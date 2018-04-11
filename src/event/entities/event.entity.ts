import {Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import {Picture} from "../../picture/entities/picture.entity";
import {User} from "../../user/entities/user.entity";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    eventId: number;

    @Column({ type: 'varchar', length: 255, nullable: true})
    title: string;

    @Column({ type: 'varchar', length: 1000, nullable: true})
    description: string;

    @OneToOne(type => User)
    animatorId: number;

    @Column({ type: 'date', nullable: true})
    eventDate: Date;

    @Column({ type: 'varchar', length: 20, nullable: true})
    time: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    place: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    eventBrite: string;

    @OneToMany(type => Picture, picture => picture.picId)
    picturesId: Picture[];

}
