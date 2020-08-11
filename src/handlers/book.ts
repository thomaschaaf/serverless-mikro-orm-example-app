import "reflect-metadata";

import { MikroORM, QueryOrder } from "@mikro-orm/core";

import { Book } from "../entities";
import config from "src/mikro-orm.config";

export const handler = async () => {
  const orm = await MikroORM.init(config);
  const body = orm.em
    .getRepository(Book)
    .findAll(["author"], { title: QueryOrder.DESC }, 20);

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
