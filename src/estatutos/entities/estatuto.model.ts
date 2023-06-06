

import { Table, Column, Model } from "sequelize-typescript";

    
@Table({tableName: 'tb_estatuto', timestamps: false})
export class Estatuto extends Model {
  @Column
  texto: string;


}
