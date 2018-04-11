import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "../../user/entities/user.entity";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    appId: number;

    @Column({ type: 'varchar', length: 20, nullable: true})
    hBegin: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    hEnd: string;

    @Column({ type: 'date', nullable: true})
    appDate: Date;

    @Column({ type: 'varchar',length: 20, nullable: true})
    place: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    object: string;

    @Column({ type: 'varchar', length: 1000, nullable: true})
    message: string;

    @OneToOne(type => User)
    @JoinColumn()
    senderId: number;

    @OneToOne(type => User)
    @JoinColumn()
    receiverId: number;

    @Column({ type: 'tinyint', nullable: true})
    status: boolean;
}
