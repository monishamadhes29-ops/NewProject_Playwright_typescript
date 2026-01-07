import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../../proto/user.proto');

const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj: any = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObj.user;

export class UserClient {
  private client: any;

  constructor() {
    this.client = new userPackage.UserService(
      'localhost:50051',
      grpc.credentials.createInsecure()
    );
  }

  createUser(data: any) {
    return this.call('CreateUser', data);
  }

  getUser(id: string) {
    return this.call('GetUser', { id });
  }
 updateUser(data: any) {
  return this.call('UpdateUser', data);
}

  deleteUser(id: string) {
    return this.call('DeleteUser', { id });
  }

  private call(method: string, payload: any) {
    return new Promise((resolve, reject) => {
      this.client[method](payload, (err: any, res: any) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}
