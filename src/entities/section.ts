import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "PCSECAO" })
export class Section {
  @PrimaryColumn({ name: "CODSEC" })
  codsec!: number;

  @Column({ name: "DESCRICAO" })
  descricao!: string;

  @Column({ name: "CODEPTO" })
  codepto!: number;
}
