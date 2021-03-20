import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ length: 32, nullable: true })
  name: string;

  @Column({ length: 128, nullable: true })
  surname: string;

  @Column({ length: 64, nullable: true })
  city: string;

  @Column({ length: 64, nullable: true })
  address: string;

  @Column({ length: 128, nullable: true })
  email: string;

  @Column({ length: 256, nullable: true })
  pr_picture_url: string;

  @Column({ length: 1024, nullable: true })
  bio: string;

  @Column({ length: 16, nullable: true })
  gender: string;

  @Column({ nullable: true })
  date_of_birth: Date;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];

  @Column({ nullable: true })
  pref_roommate_num: number; // preferred number of roommates
}
