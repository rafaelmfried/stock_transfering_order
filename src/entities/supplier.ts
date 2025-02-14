import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "PCFORNEC" })
export class Supplier {
  @PrimaryColumn({ name: "CODFORNEC" })
  codfornec!: number;

  @Column({ name: "CODFORNECPRINC" })
  codfornecprinc!: number;

  @Column({ name: "FORNECEDOR" })
  fornecedor!: string;

  @Column({ name: "FANTASIA" })
  fantasia!: string;
}
