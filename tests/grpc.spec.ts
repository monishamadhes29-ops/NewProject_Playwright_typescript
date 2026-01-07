import { test, expect } from '@playwright/test';
import { UserClient } from '../src/grpc/userClient';


const client = new UserClient();

test.beforeAll(async () => {
  const res: any = await client.createUser({
    id: '1',
    name: 'Monisha',
    email: 'monisha@test.com'
  });

  
  expect(res).toBeDefined();
  expect(res.message).toBe('User created');
  expect(res.id).toBe('1');
});

test('Get user via gRPC', async () => {
  const res: any = await client.getUser('1');
  expect(res.name).toBe('Monisha');
});

test('Update user via gRPC', async () => {
  const res: any = await client.updateUser({
    id: '1',
    name: 'Monisha Updated',
    email: 'monisha.updated@test.com'
  });

  expect(res.message).toBe('User updated');
});


test('Delete user via gRPC', async () => {
  const res: any = await client.deleteUser('1');
  expect(res.message).toBe('User deleted');
});
