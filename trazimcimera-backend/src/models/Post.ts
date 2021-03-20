import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { PostType } from "./PostType";
import { Image } from "./Image";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  post_id: number;

  @Column({ length: 1024, nullable: true })
  description: string;

  @Column({ length: 128, nullable: true })
  address: string;

  @Column()
  rent: number;

  @Column()
  num_of_roommates: number;

  @ManyToOne((type) => User, (author) => author.posts)
  author: User;

  @ManyToOne((type) => PostType, (postType) => postType.posts)
  post_type: PostType;

  @OneToMany((type) => Image, (image) => image.post)
  images: Image[];
}
