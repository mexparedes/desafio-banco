import { Module } from '@nestjs/common';
import { Trx_LogModule } from './TRX_LOG/TRX_LOG.module';

@Module({
  imports: [Trx_LogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
