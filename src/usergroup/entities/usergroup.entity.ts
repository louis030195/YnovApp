import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserGroup {
    @PrimaryGeneratedColumn()
    ugId: number;

    @Column({ type: 'varchar', length: 20, nullable: true})
    name: string;

}
