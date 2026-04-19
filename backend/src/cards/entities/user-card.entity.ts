import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Card } from './card.entity';

@Entity('user_cards')
export class UserCard {
  @PrimaryColumn('uuid')
  user_id: string;

  @PrimaryColumn()
  card_id: number;

  @ManyToOne(() => User, (user) => user.userCards, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Card, (card) => card.userCards, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'card_id' })
  card: Card;
}