import { PartialType } from '@nestjs/mapped-types';
import { CreateEstatutoDto } from './create-estatuto.dto';

export class UpdateEstatutoDto extends PartialType(CreateEstatutoDto) {}
