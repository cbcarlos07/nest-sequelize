import { Module } from '@nestjs/common';
import { EstatutosService } from './estatutos.service';
import { EstatutosController } from './estatutos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estatuto } from './entities/estatuto.model';

@Module({
  imports: [SequelizeModule.forFeature([Estatuto])],
  controllers: [EstatutosController],
  providers: [EstatutosService],
  exports: [SequelizeModule]
})
export class EstatutosModule {}
