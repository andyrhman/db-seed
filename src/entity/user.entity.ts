import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tbl_users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column({
        type: "varchar",
        length: 255,
    })
    photo: string;

    @Column({
        type: "text",
    })
    address: string;
}