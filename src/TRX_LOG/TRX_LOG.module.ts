import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database-module/database-module.module';
import { trx_logProviders } from './entities/TRX_LOG.providers';
import { Trx_LogService } from './TRX_LOG.service';
import { Trx_LogController } from './TRX_LOG.controller';

@Module({
  imports:[DatabaseModule],
  controllers: [Trx_LogController],
  providers: [Trx_LogService,...trx_logProviders]
})
export class Trx_LogModule {}
