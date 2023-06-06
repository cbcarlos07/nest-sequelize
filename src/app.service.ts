import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}
  getHello() {
    return {msg: 'Bem-vindo à API MAN Região dos Lagos'};
  }
}
