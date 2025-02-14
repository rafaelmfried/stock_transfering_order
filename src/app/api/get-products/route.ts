import { NextRequest, NextResponse } from "next/server";
import { AppDataSource, initializeDB } from "@/typeorm.config";
import { Product } from "@/entities/product";

export async function GET(req: NextRequest) {
   await initializeDB();
    const productRepo = AppDataSource.getRepository(Product);
    let products: Product[];
  
    if (req.method === "GET") {
      try {
        products = await productRepo.find();
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: "Método não permitido" }, { status: 405 });
    }

  return NextResponse.json(products, { status: 200 });
}

// export async function POST(req: NextRequest) {
//   await initializeDB();
//   const orderRepo = AppDataSource.getRepository(Order);
  
//   try {
//     const newOrders = await req.json();
//     const savedOrders = await orderRepo.save(newOrders);
//     return NextResponse.json(savedOrders, { status: 201 });
//   } catch (error) {
//     console.error("Erro ao salvar pedidos:", error);
//     return NextResponse.json({ error: "Erro ao salvar pedidos" }, { status: 500 });
//   }
// }