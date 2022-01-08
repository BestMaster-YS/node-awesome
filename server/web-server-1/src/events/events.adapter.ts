import { INestApplicationContext, WebSocketAdapter } from "@nestjs/common";
import { MessageMappingProperties } from "@nestjs/websockets";
import WebSocket, { Server } from 'ws'
import { Observable, fromEvent, mergeMap, EMPTY, filter } from 'rxjs';


export class WsAdapter implements WebSocketAdapter {
  constructor(private app: INestApplicationContext) {}

  create(port: number, options: any = {}): any {
    return new Server({ port, ...options });
  }

  bindClientConnect(server, callback: Function) {
    server.on('connection', callback);
  }

  bindMessageHandlers(
    client: WebSocket,
    handlers: MessageMappingProperties[],
    process: (data: any) => Observable<any>
  ) {
    console.log('bindMessageHandlers emit')
    fromEvent(client, 'message')
      .pipe(
        mergeMap((data: MessageEvent) => this.bindMessageHandler(data, handlers, process)),
        filter(result => result)
      )
      .subscribe(response => client.send(JSON.stringify(response)));
  }

  bindMessageHandler(
    buffer: MessageEvent,
    handlers: MessageMappingProperties[],
    process: (data: any) => Observable<any>
  ): Observable<any> {
    let message;
    try {
      message = JSON.parse(buffer.data);
    } catch (error) {
      message = buffer;
    }
    console.log('handler message formatted: ', message);
    console.log('handlers:', handlers);
    const messageHandler = handlers.find(
      handler => handler.message === message.event,
    );
    if (!messageHandler) {
      return EMPTY;
    }
    return process(messageHandler.callback(message.data));
  }

  close(server) {
    server.close();
  }
}


