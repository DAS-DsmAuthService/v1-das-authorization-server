import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './domain/user.entity';
import { UserController } from './api/user.controller';
import { UserService } from './application/user.service';

const USER_ENTITY = TypeOrmModule.forFeature([UserEntity]);

@Module({
    imports: [USER_ENTITY],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
