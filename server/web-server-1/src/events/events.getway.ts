import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import {
  Server, Socket
} from 'socket.io';

@WebSocketGateway(3002)
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server;
  private logger: Logger = new Logger('AppEventsGateway');
  private users: number = 0;

  async handleConnection() {
    this.users++;
    console.log('connect user: ', this.users);
    this.server.emit('users', this.users);
  }

  async handleDisconnect() {
    this.users--;
    this.server.emit('users', this.users);
  }

  @SubscribeMessage('chat')
  async onChat(client: Socket, message: string) {
    client.broadcast.emit('chat', message);
    return 
  }

  @SubscribeMessage('hello')
  async onHello(@ConnectedSocket() client: Socket, @MessageBody() message: any) {
    console.log('收到消息 hello');
    client.send(JSON.stringify({ event: 'tmp', data: '临时信息' }));
    return {
      event: 'hello',
      data: message,
    }
  }
}

