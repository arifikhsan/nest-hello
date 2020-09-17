import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodMorning(): { message: string } {
    return { message: 'Good Morning' };
  }
}
