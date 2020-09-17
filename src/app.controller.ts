import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Message } from './message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/good')
  getGoodMorning(): Message {
    return this.appService.getGoodMorning();
  }
}
