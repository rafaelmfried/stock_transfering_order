import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "PCGRUPOLOJA" })
export class Group {
  @PrimaryColumn({ name: "CODGRUPOLOJA" })
  codigo!: number;

  @Column({ name: "DESCRICAO" })
  fantasia!: string;
}
