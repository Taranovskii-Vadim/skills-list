import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Base } from 'src/utils';
import { Category } from 'src/category/entity';

// TODO add userId later, after auth

@Entity()
export class Skill extends Base {
  @Column()
  name: string;

  @Column({ type: 'real', default: 0 })
  rate: number;

  @JoinColumn({ name: 'category_id_fkey' })
  @ManyToOne(() => Category)
  category: Category;
}
