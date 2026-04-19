import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BoardColumn } from '../../boards/entities/board-column.entity';
import { CardTag } from './card-tag.entity';
import { UserCard } from './user-card.entity';
import { CardHistory } from './card_history.entity';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn()
  card_id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  label: string;

  @Column()
  position: number;

  @Column({
    default: false,
  })
  is_archived: boolean;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  updated_at: Date;

  @Column({
    nullable: true,
    type: 'timestamptz',
  })
  start_date: Date;

  @Column({
    nullable: true,
    type: 'timestamptz',
  })
  end_date: Date;

  @Column()
  column_id: number;

  @ManyToOne(() => BoardColumn, (boardColumn) => boardColumn.cards, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'column_id' })
  board_column: BoardColumn;

  @OneToMany(() => CardTag, (ct) => ct.card)
  cardTags: CardTag[];

  @OneToMany(() => UserCard, (userCard) => userCard.card)
  userCards: UserCard[];

  @OneToMany(() => CardHistory, (cardHistory) => cardHistory.card)
  cardHistory: CardHistory[];
}
