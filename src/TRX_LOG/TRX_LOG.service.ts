import { Inject, Injectable } from '@nestjs/common';
import { CreditConsultingDto } from './dto/create-creditConsulting';
const axios = require('axios')
import { CreateTrx_LogDto } from './dto/create-TRX_LOG.dto';

import { TRX_LOG } from './entities/TRX_LOG.entity';

@Injectable()
export class Trx_LogService {
  constructor(
    @Inject('TRX_LOG_REPOSITORY')
    private trx_logRepository: typeof TRX_LOG
  ){}

  async create(creditConsultingDto: CreditConsultingDto):Promise<any> {
    try {
      await this.validateData(creditConsultingDto)
      const systemDate = new Date().toLocaleString('en-US', { timeZone: 'America/Santiago'})
      const tax = await this.getTax();
      const cuotaValue = ((creditConsultingDto.MontoDelCredito/creditConsultingDto.NumeroCuotas)*tax).toFixed(3);
      let Trx_Log = new CreateTrx_LogDto;
      Trx_Log.fecha_TRX = systemDate;
      Trx_Log.json_TRX = JSON.stringify({
        Request: creditConsultingDto,
        Response: {
          status: 201,
          ValorCuota: cuotaValue
        }
      })
      console.log(Trx_Log)
      await this.trx_logRepository.create(  {...Trx_Log}  );
      return cuotaValue;
    
    } catch (error) {
      throw error
    }
    
  }

  async login(){
    try {
      const { data } = await axios.get(`${process.env.GET_CLIENT}`)
      return data.body;
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async validateData( creditConsultingDto: CreditConsultingDto) {
    if( creditConsultingDto.RutCliente === 0 || creditConsultingDto.MontoDelCredito === 0 || creditConsultingDto.NumeroCuotas === 0){
      throw new Error("Missing Data")
    }
    return;
  }
  async getTax(){
    try {
      const { data } = await axios.get(`${process.env.GET_TAX}`)
      const json = await JSON.parse(data.body);
      const tax = json.message.substr(5,json.message.lenght)
      return Number(tax);
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}
