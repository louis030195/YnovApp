import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    eventId: number;

    @Column({ type: 'varchar', length: 255, nullable: true})
    title: string;

    @Column({ type: 'varchar', length: 1000, nullable: true})
    description: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    animator: string;

    @Column({ type: 'date', nullable: true})
    eventDate: Date;

    @Column({ type: 'varchar', length: 20, nullable: true})
    time: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    place: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    eventBrite: string;
}
