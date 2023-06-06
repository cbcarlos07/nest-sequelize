import { Test, TestingModule } from '@nestjs/testing';
import { EstatutosController } from './estatutos.controller';
import { EstatutosService } from './estatutos.service';

describe('EstatutosController', () => {
  let controller: EstatutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstatutosController],
      providers: [EstatutosService],
    }).compile();

    controller = module.get<EstatutosController>(EstatutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
