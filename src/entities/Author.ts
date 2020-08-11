import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  Property,
  PrimaryKey,
  ManyToOne,
  Unique,
} from "@mikro-orm/core";

import { Book } from ".";

@Entity()
export class Author {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  name: string;

  @Property()
  @Unique()
  email: string;

  @Property({ nullable: true })
  age?: number;

  @Property()
  termsAccepted = false;

  @Property({ nullable: true })
  born?: Date;

  @OneToMany(() => Book, (b) => b.author, { cascade: [Cascade.ALL] })
  books = new Collection<Book>(this);

  @ManyToOne(() => Book, { nullable: true })
  favouriteBook?: Book;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
