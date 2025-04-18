import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../domain/user.entity';
import { SignupRequest } from '../dto/request/sigup.request.dto';
import { UserState } from '../domain/data/user.state';
import { UserRole } from '../domain/data/user.role';
import { v4 as uuidv4 } from 'uuid';
import { UserAllResponse } from '../dto/response/user.all.response.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async signup(request: SignupRequest): Promise<void> {
        const {
            name,
            birth_day,
            class_number,
            account_id,
            password,
            password_check,
        } = request;

        if (password !== password_check) {
            throw new BadRequestException('비밀번호가 일치하지 않습니다.');
        }

        const encodedPassword = await bcrypt.hash(password, 10);

        const entranceYear = 25;
        const grade = Math.floor(class_number / 1000);
        const classNum = Math.floor((class_number % 1000) / 100);
        const num = class_number % 100;

        const user = this.userRepository.create({
            id: uuidv4(),
            name,
            entranceYear,
            birthDay: new Date(birth_day),
            grade,
            classNum,
            num,
            accountId: account_id,
            password: encodedPassword,
            userState: UserState.CREATED,
            role: UserRole.STU,
        });

        await this.userRepository.save(user);
    }

    async findAll(): Promise<UserAllResponse[]> {
        const users = await this.userRepository.find({
            select: ['id', 'name', 'grade', 'classNum', 'num', 'club'],
        });

        return users.map((user) => ({
            id: user.id,
            name: user.name,
            grade: user.grade,
            classNum: user.classNum,
            num: user.num,
            club: user.club,
        }));
    }
}
