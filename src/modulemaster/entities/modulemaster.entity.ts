import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ModuleMaster {
    @PrimaryGeneratedColumn()
    mmId: number;

    @Column({ type: 'varchar', length: 50, nullable: true})
    name: string;


}
