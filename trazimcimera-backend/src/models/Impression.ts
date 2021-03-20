import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Contact } from "./Contact";

@Entity()
export class Impression {
  @PrimaryGeneratedColumn()
  impression_id: number;

  @OneToOne((type) => Contact)
  @JoinColumn()
  contact: Contact;
}
