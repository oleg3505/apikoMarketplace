import socket from 'socket.io-client';

class SocketApi {
  socket = null;
  init(token) {
    this.socket = socket('http://localhost:19002', {
      query: {
        token,
      },
      transports: ['websocket'],
    });
    this.socket.on('conect', () => {
      console.log('Conected');
      console.log({ socket });
    });
  }

  handleMessages(handler) {
    console.log('handler');
    this.socket.on('massage', (message) => {
      console.log('MESSAGE', message);
      handler(message);
    });
  }
}

export default new SocketApi();
