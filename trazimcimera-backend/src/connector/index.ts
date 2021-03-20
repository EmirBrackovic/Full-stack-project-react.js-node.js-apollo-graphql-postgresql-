import { createConnection } from "typeorm";

export const connector = () => createConnection({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_USERNAME,
  synchronize: true,
  logging: false,

  entities: [
    "src/models/*.ts"
  ],
  
  migrations: [
    "src/typeorm/migration/*.ts"
  ],

  subscribers: [
    "src/typeorm/subscriber/*.ts"
  ],

  cli: {
    entitiesDir: "src/typeorm/entity",
    migrationsDir: "src/typeorm/migration",
    subscribersDir: "src/typeorm/subscriber"
  }
});