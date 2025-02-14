import { DataSource } from "typeorm";
import { Order } from "./entities/order";

export const AppDataSource = new DataSource({
  type: "oracle",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  sid: process.env.DB_SID, // SID do Oracle
  synchronize: false, // Altere para true apenas no desenvolvimento
  logging: true,
  entities: [Order],
  extra: {
    // Configuração necessária para conexões persistentes no Oracle
    poolMax: 10,
    poolMin: 2,
    poolTimeout: 60,
  },
});

export const initializeDB = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
};