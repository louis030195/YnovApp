import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentOffice {
    @PrimaryGeneratedColumn()
    soId: number;

    @Column({ type: 'varchar', length: 20, nullable: true})
    name: string;

    @Column({ type: 'varchar', length: 1000, nullable: true})
    description: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    leader: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    homeSite: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    facebook: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    instagram: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    snapchat: string;

    @Column({ type: 'varchar', length: 50, nullable: true})
    twitter: string;
}
