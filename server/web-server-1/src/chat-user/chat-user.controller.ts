import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ChatUserService } from './chat-user.service';
import { CreateChatUserDto } from './dto/create-chat-user.dto';
import { UpdateChatUserDto } from './dto/update-chat-user.dto';

@Controller()
export class ChatUserController {
  constructor(private readonly chatUserService: ChatUserService) {}

  @MessagePattern('createChatUser')
  create(@Payload() createChatUserDto: CreateChatUserDto) {
    return this.chatUserService.create(createChatUserDto);
  }

  @MessagePattern('findAllChatUser')
  findAll() {
    return this.chatUserService.findAll();
  }

  @MessagePattern('findOneChatUser')
  findOne(@Payload() id: number) {
    return this.chatUserService.findOne(id);
  }

  @MessagePattern('updateChatUser')
  update(@Payload() updateChatUserDto: UpdateChatUserDto) {
    return this.chatUserService.update(updateChatUserDto.id, updateChatUserDto);
  }

  @MessagePattern('removeChatUser')
  remove(@Payload() id: number) {
    return this.chatUserService.remove(id);
  }
}
