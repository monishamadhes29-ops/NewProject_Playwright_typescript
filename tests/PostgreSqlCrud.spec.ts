import { test, expect } from '@playwright/test';
import { DBClient } from '../src/dbConnect/dbClient';

test.describe('PostgreSQL CRUD Operations – Shared User', () => {
  let db: DBClient;
  let userId: number;
  let email: string;

  test.beforeAll(async () => {
    db = new DBClient();
    await db.connect();

    email = `Monisha_${Date.now()}@test.com`;

    const user = await db.createUser(
      'Monisha',
      email
    );

    userId = user.id;
  });

  test.afterAll(async () => {
    await db.deleteUser(userId);
    await db.disconnect();
  });

  // ---------------- READ ----------------
  test('READ user', async () => {
    const user = await db.getUserByEmail(email);

    expect(user).toBeDefined();
    expect(user!.id).toBe(userId);
    expect(user!.email).toBe(email);
  });

  // ---------------- UPDATE ----------------
  test('UPDATE user', async () => {
    const updatedEmail = `updated_${Date.now()}@test.com`;

    const updatedUser = await db.updateUserEmail(
      userId,
      updatedEmail
    );

    expect(updatedUser).toBeDefined();
    expect(updatedUser.email).toBe(updatedEmail);

    // update shared state
    email = updatedEmail;
  });

  // ---------------- DELETE ----------------
  test('DELETE user', async () => {
    await db.deleteUser(userId);

    const deletedUser = await db.getUserByEmail(email);
    expect(deletedUser).toBeUndefined();
  });
});
