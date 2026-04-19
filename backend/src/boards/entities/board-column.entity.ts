import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from './board.entity';
import { Card } from '../../cards/entities/card.entity';

@Entity('board_columns')
export class BoardColumn {
  @PrimaryGeneratedColumn()
  column_id: number;
  
  @Column({
    type: 'varchar',
    length: 50,
  })
  label: string;
  
  @Column()
  position: number;
  
  @Column()
  board_id: number;
  
  @ManyToOne(() => Board, (board) => board.columns, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @OneToMany(() => Card, (card) => card.board_column, { onDelete: 'CASCADE' })
  cards: Card[];
}