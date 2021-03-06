import { Test, TestingModule } from '@nestjs/testing';
import { ChatUserController } from './chat-user.controller';
import { ChatUserService } from './chat-user.service';

describe('ChatUserController', () => {
  let controller: ChatUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatUserController],
      providers: [ChatUserService],
    }).compile();

    controller = module.get<ChatUserController>(ChatUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
