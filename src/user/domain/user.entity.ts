import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { UserState } from './data/user.state';
import { UserRole } from './data/user.role';
import { UUID_TRANSFORMER } from './data/user.uuid.transformer';

@Entity('tbl_user')
export class UserEntity {
    @PrimaryColumn('binary', {
        length: 16,
        transformer: UUID_TRANSFORMER,
    })
    id: string;

    @Column({ name: 'name', nullable: true })
    name: string;

    @Column({ name: 'entrance_year', type: 'int', nullable: true })
    entranceYear: number;

    @Column({ name: 'birth_day', type: 'date', nullable: true })
    birthDay: Date;

    @Column({ name: 'grade', type: 'int', nullable: true })
    grade: number;

    @Column({ name: 'profile_file_name', nullable: true })
    profileFileName: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'account_id', unique: true })
    accountId: string;

    @Column({ name: 'class_num', type: 'int', nullable: true })
    classNum: number;

    @Column({ name: 'num', type: 'int', nullable: true })
    num: number;

    @Column({ name: 'device_token', nullable: true })
    deviceToken: string;

    @Column({ name: 'club', type: 'varchar', nullable: true })
    club: string;

    @Column({ name: 'state', type: 'enum', enum: UserState })
    userState: UserState;

    @Column({ name: 'role', type: 'enum', enum: UserRole })
    role: UserRole;
}
