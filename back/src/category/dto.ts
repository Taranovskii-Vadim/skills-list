import { IsString } from 'class-validator';

export class PostCategoryDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
