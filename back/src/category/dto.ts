import { IsString } from 'class-validator';

export class PostCategoryDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class PatchCategoryDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
