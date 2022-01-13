import { Module } from '@nestjs/common';
import { ChatUserService } from './chat-user.service';
import { ChatUserController } from './chat-user.controller';

@Module({
  controllers: [ChatUserController],
  providers: [ChatUserService]
})
export class ChatUserModule {}
