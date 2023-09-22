import { IsNumber, IsString } from 'class-validator';

export class PostSkillDTO {
  @IsNumber()
  categoryId: number;

  @IsString()
  name: string;
}

export class PatchSkillDTO {
  @IsNumber()
  rate: number;
}
