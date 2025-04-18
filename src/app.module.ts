import { Module } from '@nestjs/common';
import { GlobalConfigModule } from './common/module/config.module';
import { DatabaseModule } from './common/module/database.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [DatabaseModule, GlobalConfigModule, UserModule],
})
export class AppModule {}
