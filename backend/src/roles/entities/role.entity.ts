import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolePermission } from './role-permission.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  label: string;

  @OneToMany(() => RolePermission, (rp) => rp.role)
  rolePermissions: RolePermission[];
}
