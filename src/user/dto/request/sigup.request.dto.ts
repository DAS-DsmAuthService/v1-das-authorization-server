import {
    IsNotEmpty,
    IsString,
    Length,
    IsDate,
    IsInt,
    Min,
    Max,
    Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SignupRequest {
    @IsNotEmpty()
    @IsString()
    @Length(2, 4, { message: '이름은 2글자 이상, 4글자 이하여야 합니다.' })
    name: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    birth_day: Date;

    @IsNotEmpty()
    @IsInt()
    @Min(1000, { message: '학번은 4자리 이어야 합니다.' })
    @Max(9999, { message: '학번은 4자리 이어야 합니다.' })
    class_number: number;

    @IsNotEmpty()
    @IsString()
    account_id: string;

    @IsNotEmpty()
    @Matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%&'()*+,./:;<=>?@＼^_`{|}~])[a-zA-Z0-9!#$%&'()*+,./:;<=>?@＼^_`{|}~]{8,30}$/,
        {
            message: 'password는 소문자, 숫자, 특수문자가 포함되어야 합니다.',
        },
    )
    password: string;

    @IsNotEmpty()
    password_check: string;
}
