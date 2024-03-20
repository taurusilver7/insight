import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AUTHORS, BOOKS, USERS } from "../../constants/dbTable";

@Entity(AUTHORS)
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  image: string;
}
