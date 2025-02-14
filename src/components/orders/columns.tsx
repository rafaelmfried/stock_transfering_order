"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Order = {
  codprod: number
  descricao: string
  filialOrigem: string
  estoqueOrigem: string
  filialDestino: string
  razaoSocial: string
  estoqueDestino: string
  giroMes: number
  giroDia: number
  qtdeSugerida: number
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "descricao",
    header: "Product",
  },
  {
    accessorKey: "codprod",
    header: "codprod",
  },
  {
    accessorKey: "filialOrigem",
    header: "filial origem",
  },
  {
    accessorKey: "estoqueOrigem",
    header: "estoque origem",
  },
  {
    accessorKey: "filialDestino",
    header: "filial destino",
  },
  {
    accessorKey: "razaoSocial",
    header: "razao social",
  },
  {
    accessorKey: "estoqueDestino",
    header: "estoque destino",
  },
  {
    accessorKey: "giroMes",
    header: "giro mês",
  },
  {
    accessorKey: "giroDia",
    header: "giro dia",
  },
  {
    accessorKey: "qtdeSugerida",
    header: "qtde sugerida",
  },
]
