import {
  Cascade,
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Author, BookTag, Publisher } from "./index";

@Entity()
export class Book {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  title: string;

  @ManyToOne(() => Author)
  author: Author;

  @ManyToOne(() => Publisher, {
    cascade: [Cascade.PERSIST, Cascade.REMOVE],
    nullable: true,
  })
  publisher?: Publisher;

  @ManyToMany(() => BookTag)
  tags = new Collection<BookTag>(this);

  @Property({ nullable: true })
  metaObject?: object;

  @Property({ nullable: true })
  metaArray?: any[];

  @Property({ nullable: true })
  metaArrayOfStrings?: string[];

  constructor(title: string, author: Author) {
    this.title = title;
    this.author = author;
  }
}
