import { DataSource } from "typeorm";
// import { Order } from "@/entities/order";
import { Product } from "@/entities/product";
import { Supplier } from "@/entities/supplier";
import { Departament } from "@/entities/departament";
import { Section } from "@/entities/section";
import { Branch } from "@/entities/branch";
import { Group } from "./entities/group";

export const AppDataSource = new DataSource({
  type: "oracle",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  serviceName: process.env.DB_SERVICE_NAME,
  connectString: process.env.DB_CONNECT_STRING,
  synchronize: false,
  logging: true,
  entities: [Product, Supplier, Departament, Section, Branch, Group],
  extra: {
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