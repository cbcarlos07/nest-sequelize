import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { EstatutosModule } from './estatutos/estatutos.module';
import { SequelizeModule } from '@nestjs/sequelize';


console.log('process.env.DB_HOST',process.env.DB_HOST);

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }), 
    EstatutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
