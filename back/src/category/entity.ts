import { Column, Entity } from 'typeorm';

import { Base } from 'src/utils';

@Entity()
export class Category extends Base {
  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;
}
