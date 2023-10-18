import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    city: string

    @Column()
    country: string

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

}
