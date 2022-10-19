
import { TRX_LOG } from './TRX_LOG.entity';

export const trx_logProviders = [
  {
    provide: 'TRX_LOG_REPOSITORY',
    useValue: TRX_LOG,
  },
];