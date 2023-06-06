import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstatutosService } from './estatutos.service';
import { CreateEstatutoDto } from './dto/create-estatuto.dto';
import { UpdateEstatutoDto } from './dto/update-estatuto.dto';

@Controller('estatutos')
export class EstatutosController {
  constructor(private readonly estatutosService: EstatutosService) {}

  @Get()
  findAll() {
    return this.estatutosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estatutosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEstatutoDto: UpdateEstatutoDto) {
    return this.estatutosService.update(+id, updateEstatutoDto);
  }

}
