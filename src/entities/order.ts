import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "ORDERS" }) // Nome real da tabela no Oracle
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "CODPROD" })
  codprod!: string;

  @Column({ name: "DESCRICAO" })
  descricao!: string;

  @Column({ name: "FILIAL_ORIGEM" })
  filialOrigem!: string;

  @Column({ name: "ESTOQUE_ORIGEM", type: "number" })
  estoqueOrigem!: number;

  @Column({ name: "FILIAL_DESTINO" })
  filialDestino!: string;

  @Column({ name: "RAZAO_SOCIAL_DESTINO" })
  razaoSocialDestino!: string;

  @Column({ name: "ESTOQUE_DESTINO", type: "number" })
  estoqueDestino!: number;

  @Column({ name: "GIRO_MES", type: "number" })
  giroMes!: number;

  @Column({ name: "GIRO_DIA", type: "number" })
  giroDia!: number;

  @Column({ name: "QTDE_SUGERIDA", type: "number" })
  qtdeSugerida!: number;
}
