import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, BadRequestException, HttpCode } from '@nestjs/common';
import { CreditConsultingDto } from './dto/create-creditConsulting';
import { CreateTrx_LogDto } from './dto/create-TRX_LOG.dto';
import { Trx_LogService } from './TRX_LOG.service';


@Controller('TRX_LOG')
export class Trx_LogController {
  constructor(private readonly trx_logService: Trx_LogService) {}


  @Get('/ingresar')
  async login() {
    return await this.trx_logService.login();
  }
  @Get('/tax')
  async getTax() {
    return await this.trx_logService.getTax();
  }
  @HttpCode(201)
  @Post('calcularCreditoConsumo')
  async creditCalculate(@Body() creditConsultingDto: CreditConsultingDto) {
    try {
      
      const valorCuota =  await this.trx_logService.create(creditConsultingDto)
      return { status: 201,ValorCuota: valorCuota }
    } catch (error) {
      if ( error.message==='Missing Data' ){
        throw new BadRequestException()
      }
      throw error
    }
  }

}
