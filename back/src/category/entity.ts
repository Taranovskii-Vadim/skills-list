import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Base } from 'src/utils';
import { User } from 'src/user/entity';

@Entity()
export class Category extends Base {
  @Column()
  title: string;

  @JoinColumn({ name: 'user_id_fkey' })
  @ManyToOne(() => User)
  user: User;

  @Column({ nullable: true })
  description: string;
}
