import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  contact_id: number;

  @Column({ length: 32, nullable: true })
  name: string;

  @Column({ length: 128, nullable: true })
  email: string;

  @Column({ length: 1024, nullable: true })
  message: string;
}
