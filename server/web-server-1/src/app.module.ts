import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { ChatUserModule } from './chat-user/chat-user.module';

@Module({
  imports: [EventsModule, UsersModule, ChatUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
