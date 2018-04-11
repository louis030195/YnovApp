import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {UserGroup} from "../../usergroup/entities/usergroup.entity";

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

    @Column({ type: 'tinyint', nullable: true})
    verifyUseCondition: boolean;

    @ManyToOne(type => UserGroup, userGroup => userGroup.usersId)
    ugId: number;
}
