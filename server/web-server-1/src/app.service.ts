import { Injectable } from '@nestjs/common';
import {Info} from "./dto";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getData(): Info {
    return {
      id: '87621789872173892',
      count: 2,
      list: [
        {
          content: 'test1'
        },
        {
          content: 'test2'
        }
      ]
    }
  }
}
