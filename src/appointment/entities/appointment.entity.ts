import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ type: 'date', nullable: true})
    place: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    object: string;

    @Column({ type: 'varchar', length: 1000, nullable: true})
    message: string;

    @Column({ type: 'int', nullable: true})
    senderId: number;

    @Column({ type: 'int', nullable: true})
    receiverId: number;

    @Column({ type: 'tinyint', nullable: true})
    status: boolean;
}
