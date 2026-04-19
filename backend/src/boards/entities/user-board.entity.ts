import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Board } from './board.entity';
import { Role } from '../../roles/entities/role.entity';

@Entity('USER_BOARDS')
export class UserBoard {
  @PrimaryColumn('uuid')
  user_id: string;

  @PrimaryColumn('int')
  board_id: number;

  @Column('int')
  role_id: number;

  @ManyToOne(() => User, (user) => user.userBoards, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Board, (board) => board.userBoards, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
