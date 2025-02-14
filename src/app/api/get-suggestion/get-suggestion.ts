import { NextApiRequest, NextApiResponse } from "next";
// import { AppDataSource, initializeDB } from "@/typeorm.config";
// import { Order } from "@/entities/order";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // await initializeDB();
  // const orderRepo = AppDataSource.getRepository(Order);

  if (req.method === "GET") {
    try {
      // const orders = await orderRepo.find();
      // res.status(200).json(orders);
      res.status(200).json(['ola'])
    } catch (error) {
      console.error("Erro ao buscar ordens:", error);
      res.status(500).json({ error: "Erro ao buscar dados" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}