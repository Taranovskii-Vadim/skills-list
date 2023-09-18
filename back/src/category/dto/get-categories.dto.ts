import { IsNumber, IsString } from 'class-validator';

export class GetCategoriesDTO {
  @IsNumber()
  id: number;

  @IsString()
  title: string;
}
