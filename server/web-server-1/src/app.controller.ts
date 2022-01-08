import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {Info} from "./dto";

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/data')
  getData(): Info {
    return this.appService.getData();
  }
}
