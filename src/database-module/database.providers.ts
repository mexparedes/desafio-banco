import { Sequelize } from 'sequelize-typescript';
import { TRX_LOG } from 'src/TRX_LOG/entities/TRX_LOG.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host:  process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      });
      sequelize.addModels([TRX_LOG]);
      //await sequelize.sync({force:false});//{force:true}
      return sequelize;
    },
  },
]; 