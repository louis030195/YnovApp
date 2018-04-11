import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "../../user/entities/user.entity";

@Entity()
export class UserGroup {
    @PrimaryGeneratedColumn()
    ugId: number;

    @Column({ type: 'varchar', length: 20, nullable: true})
    name: string;

    @OneToMany(type => User, user => user.usrId)
    usersId: number

}
