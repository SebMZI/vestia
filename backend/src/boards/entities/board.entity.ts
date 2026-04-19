import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserBoard } from './user-board.entity';
import { BoardColumn } from './board-column.entity';
import { Webhook } from './webhook.entity';
import { Tag } from './tag.entity';

@Entity('boards')
export class Board {
  @PrimaryGeneratedColumn()
  board_id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  label: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt: Date;

  @OneToMany(() => UserBoard, (userBoard) => userBoard.board)
  userBoards: UserBoard[];

  @OneToMany(() => BoardColumn, (column) => column.board)
  columns: BoardColumn[];

  @OneToMany(() => Webhook, (webhook) => webhook.board)
  webhooks: Webhook[];

  @OneToMany(() => Tag, (tag) => tag.board)
  tags: Tag[];
}
