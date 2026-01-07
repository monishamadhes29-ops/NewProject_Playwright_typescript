import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../../proto/user.proto');

const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj: any = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObj.user;

const users = new Map<string, any>();

const server = new grpc.Server();

server.addService(userPackage.UserService.service, {
  CreateUser: (call: any, callback: any) => {
    users.set(call.request.id, call.request);
    callback(null, {
      ...call.request,
      message: 'User created'
    });
  },

  GetUser: (call: any, callback: any) => {
    const user = users.get(call.request.id);
    callback(null, {
      ...user,
      message: 'User fetched'
    });
  },

  UpdateUser: (call: any, callback: any) => {
  if (!users.has(call.request.id)) {
    return callback(null, { message: 'User not found' });
  }

  users.set(call.request.id, call.request);

  callback(null, {
    ...call.request,
    message: 'User updated'
  });
},


  DeleteUser: (call: any, callback: any) => {
    users.delete(call.request.id);
    callback(null, {
      id: call.request.id,
      message: 'User deleted'
    });
  }
});

server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log('✅ gRPC Server running on port 50051');
    server.start();
  }
);
