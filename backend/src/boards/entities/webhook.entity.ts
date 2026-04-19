import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Board } from './board.entity';

@Entity('webhooks')
export class Webhook {
  @PrimaryGeneratedColumn()
  webhook_id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  webhook_type: string;

  @Column()
  link: string;

  @Column({
    default: true,
  })
  is_active: boolean;

  @Column()
  board_id: number;

  @ManyToOne(() => Board, (board) => board.webhooks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;
}