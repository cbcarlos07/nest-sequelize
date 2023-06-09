

import { Table, Column, Model } from "sequelize-typescript";

    
@Table({tableName: 'tb_user', timestamps: false})
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;
}

