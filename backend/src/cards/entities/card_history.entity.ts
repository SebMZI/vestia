import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from './card.entity';
import { User } from '../../users/entities/user.entity';

@Entity('card_histories')
export class CardHistory {
  @PrimaryGeneratedColumn()
  history_id: number;

  @Column()
  action_type: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  created_at: Date;

  @Column()
  card_id: number;

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => Card, (card) => card.cardHistory, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'card_id' })
  card: Card;

  @ManyToOne(() => User, (user) => user.cardHistory, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}