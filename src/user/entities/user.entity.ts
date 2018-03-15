import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    usrId: number;

    @Column({ type: 'varchar', length: 20, nullable: true})
    mail: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    password: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    firstname: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    lastname: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    level: string;

    @Column({ type: 'varchar', length: 20, nullable: true})
    formation: string;
}
