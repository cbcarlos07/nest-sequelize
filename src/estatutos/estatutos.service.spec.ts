import { Test, TestingModule } from '@nestjs/testing';
import { EstatutosService } from './estatutos.service';

describe('EstatutosService', () => {
  let service: EstatutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstatutosService],
    }).compile();

    service = module.get<EstatutosService>(EstatutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
