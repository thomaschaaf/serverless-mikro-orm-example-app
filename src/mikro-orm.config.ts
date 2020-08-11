import { Author, Book, BookTag, Publisher, BaseEntity } from "./entities";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
import { Options } from "@mikro-orm/core";

export const config: Options = {
  dbName: "example",
  type: "mysql",
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: Number(process.env.MYSQL_PORT) || 3307,
  user: process.env.MYSQL_USERNAME || "root",
  password: process.env.MYSQL_PASSWORD || "",
  // as we are using class references here, we don't need to specify `entitiesTs` option
  entities: [Author, Book, BookTag, Publisher, BaseEntity],
  highlighter: new SqlHighlighter(),
  // debug: true,
  // discovery: { disableDynamicFileAccess: true },
};

export default config;
