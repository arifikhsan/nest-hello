import { Injectable } from '@nestjs/common';
import { Message } from './message';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodMorning(): Message {
    return { message: 'Good Morning' };
  }
}
