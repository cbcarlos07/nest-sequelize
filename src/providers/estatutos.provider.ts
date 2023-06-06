import { Estatuto } from "src/entities/estatuto.entity";

export const estatutosProviders = [
    {
      provide: 'ESTATUTO_REPOSITORY',
      useValue: Estatuto,
    },
  ];