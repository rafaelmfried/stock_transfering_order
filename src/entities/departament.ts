import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "PCDEPTO" })
export class Departament {
  @PrimaryColumn({ name: "CODEPTO" })
  codepto!: string;

  @Column({ name: "DESCRICAO" })
  descricao!: string;
}
