import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, BadRequestException, HttpCode } from '@nestjs/common';
import { CreditConsultingDto } from './dto/create-creditConsulting';
import { CreateTrx_LogDto } from './dto/create-TRX_LOG.dto';
import { Trx_LogService } from './TRX_LOG.service';


@Controller('TRX_LOG')
export class Trx_LogController {
  constructor(private readonly trx_logService: Trx_LogService) {}

  // @Post()
  // async create(@Body() createTrx_Log: CreditConsultingDto) {
  //   console.log(createTrx_Log)
  //   return await this.trx_logService.create(createTrx_Log);
  // }

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

  

  // @Get('/id/:id')
  // async findById(@Param('id') id: string) {
  //   return await this.userService.findOne( id );
  // }

  // // @Get(':id')
  // // findOne(@Param('id') id: string) {
  // //   return this.userService.findOne(+id);
  // // }

  // @Get('/poblateUsers')
  // async poblate() {
  //   return await this.userService.poblateBBDD();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
