import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Base } from 'src/utils';
import { User } from 'src/user/entity';
import { Category } from 'src/category/entity';

@Entity()
export class Skill extends Base {
  @Column()
  name: string;

  @Column({ type: 'real', default: 0 })
  rate: number;

  @Column({ default: '' })
  logo: string;

  @JoinColumn({ name: 'user_id_fkey' })
  @ManyToOne(() => User)
  user: User;

  // @JoinColumn({ name: 'category_id_fkey' })
  // @ManyToOne(() => Category)
  // category: Category;
}
