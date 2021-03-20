import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Post } from "./Post";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  image_id: number;

  @Column({ length: 256, nullable: true })
  url: string;

  @ManyToOne((type) => Post, (post) => post.images, { cascade: true })
  post: Post;
}
