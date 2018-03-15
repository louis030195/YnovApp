import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ type: 'varchar', length: 20, nullable: true})
    author: string;

    @Column({ type: 'date', default: null})
    creationDate: Date;
}
