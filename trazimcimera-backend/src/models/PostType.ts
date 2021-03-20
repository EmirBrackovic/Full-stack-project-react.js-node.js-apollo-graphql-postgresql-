import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class PostType {
  @PrimaryGeneratedColumn()
  post_type_id: number;

  @Column({ length: 128, nullable: true })
  name: string;

  @OneToMany((type) => Post, (post) => post.post_type)
  posts: Post[];
}
