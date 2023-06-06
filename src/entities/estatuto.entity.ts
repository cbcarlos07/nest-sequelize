import { Model } from "sequelize";
import { Table, Column } from "sequelize-typescript";

@Table
export class Estatuto extends Model<Estatuto> {
  @Column
  name: string;

}