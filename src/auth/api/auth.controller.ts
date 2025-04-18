import { Controller, Injectable } from '@nestjs/common';
import { AuthService } from '../application/auth.service';

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
}

/**
 * [서비스에서 사용하는 기능]
 * 로그인 API
 * 비밀번호 찾기 API, 아이디 찾기 API
 * AccessToken 발급 API (Authorization Code를 가지고 발급)
 *
 * [서비스 사용 외 기능]
 * client 등록 API
 */
