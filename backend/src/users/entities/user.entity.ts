import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany,
} from 'typeorm';
import { UserCard } from '../../cards/entities/user-card.entity';
import { CardHistory } from '../../cards/entities/card_history.entity';
import { UserBoard } from '../../boards/entities/user-board.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  firstname: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  lastname: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  email: string;

  @Column({ select: false })
  password: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;

  @OneToMany(() => UserCard, (userCard) => userCard.user)
  userCards: UserCard[];

  @OneToMany(() => CardHistory, (cardHistory) => cardHistory.user)
  cardHistory: CardHistory[];

  @OneToMany(() => UserBoard, (userBoard) => userBoard.user)
  userBoards: UserBoard[];
}
