import { NextRequest, NextResponse } from "next/server";
import { AppDataSource, initializeDB } from "@/typeorm.config";
import { Order } from "@/entities/order";

export async function GET() {
  const orders = [
    {
      codprod: "1234",
      descricao: "Produto Teste",
      filialOrigem: "001",
      estoqueOrigem: 100,
      filialDestino: "002",
      razaoSocialDestino: "Filial B",
      estoqueDestino: 50,
      giroMes: 20,
      giroDia: 2,
      qtdeSugerida: 30,
    },
  ];

  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  await initializeDB();
  const orderRepo = AppDataSource.getRepository(Order);
  
  try {
    const newOrders = await req.json();
    const savedOrders = await orderRepo.save(newOrders);
    return NextResponse.json(savedOrders, { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar pedidos:", error);
    return NextResponse.json({ error: "Erro ao salvar pedidos" }, { status: 500 });
  }
}