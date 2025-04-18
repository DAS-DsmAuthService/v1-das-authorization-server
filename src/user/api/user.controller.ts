import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { UserService } from '../application/user.service';
import { UserEntity } from '../domain/user.entity';
import { SignupRequest } from '../dto/request/sigup.request.dto';
import { UserAllResponse } from '../dto/response/user.all.response.dto';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() request: SignupRequest): Promise<void> {
        return await this.userService.signup(request);
    }

    @Get()
    async findAll(): Promise<UserAllResponse[]> {
        return await this.userService.findAll();
    }
}
