import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "PCFILIAL" })
export class Branch {
  @PrimaryColumn({ name: "CODIGO" })
  codigo!: string;

  @Column({ name: "RAZAOSOCIAL" })
  razaosocial!: string;

  @Column({ name: "FANTASIA" })
  fantasia!: string;
}
