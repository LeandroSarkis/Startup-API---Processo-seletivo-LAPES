import { StartupsService } from './service/startups.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    StartupsService, AppService],
})
export class AppModule { }
