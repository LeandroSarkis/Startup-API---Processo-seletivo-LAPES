import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { createRow, deleteByCodigo, readAllStartups, searchByCodigo, updateNameByCodigo } from './repository/startups';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllStartups(): any {
    return readAllStartups();
  }
  
  @Get(':codigo')
  searchByCodigo(@Param() params: any): any {
    return searchByCodigo(params.codigo);
  }

  @Put()
  updateNameByCodigo(@Body() params: any): any {
    return updateNameByCodigo(params);
  }

  @Delete(':codigo')
  deleteByCodigo(@Param() params: any): any {
    return deleteByCodigo(params.codigo);
  }

  @Post()
  createRow(@Body() params: any): any {
    return createRow(params);
  }
}

