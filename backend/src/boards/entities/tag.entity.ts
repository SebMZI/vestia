import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from './board.entity';
import { CardTag } from '../../cards/entities/card-tag';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  tag_id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  label: string;

  @Column()
  board_id: number;

  @ManyToOne(() => Board, (board) => board.tags, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @OneToMany(() => CardTag, (ct) => ct.tag)
  cardTags: CardTag[];
}