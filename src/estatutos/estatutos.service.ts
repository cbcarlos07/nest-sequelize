import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateEstatutoDto } from './dto/create-estatuto.dto';
import { UpdateEstatutoDto } from './dto/update-estatuto.dto';
import { Estatuto } from './entities/estatuto.model';

@Injectable()
export class EstatutosService {

  constructor(
    @InjectModel(Estatuto)
    private estatutoModel: typeof Estatuto,
  ) {}

  findAll() {
    return this.estatutoModel.findAll();
  }

  findOne(id: number) {
    return this.estatutoModel.findByPk(id)
  }

  update(id: number, updateEstatutoDto: UpdateEstatutoDto) {
    return this.estatutoModel.update(updateEstatutoDto, {where: {id}})
  }
}
