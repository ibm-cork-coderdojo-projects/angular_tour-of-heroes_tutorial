import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message)
}

  clear() {
    this.messages.length = 0;
  }
  constructor() { }

}
