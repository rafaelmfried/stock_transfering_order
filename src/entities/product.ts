import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "PCPRODUT" })
export class Product {
  @PrimaryColumn({ name: "CODPROD" })
  codprod!: string;

  @Column({ name: "DESCRICAO" })
  descricao!: string;
}
