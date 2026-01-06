const { Client } = require('pg');
import { dbConfig } from './dbConfig';

export class DBClient {
  private client: any;

  constructor() {
    this.client = new Client({
      connectionString: dbConfig.connectionString,
    });
  }

  async connect() {
    await this.client.connect();
  }

  async disconnect() {
    await this.client.end();
  }

  // CREATE
  async createUser(name: string, email: string) {
    const result = await this.client.query(
      `INSERT INTO users (name, email)
       VALUES ($1, $2)
       RETURNING *`,
      [name, email]
    );
    return result.rows[0];
  }

  // READ
  async getUserByEmail(email: string) {
    const result = await this.client.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );
    return result.rows[0];
  }

  // UPDATE
  async updateUserEmail(id: number, newEmail: string) {
    const result = await this.client.query(
      `UPDATE users
       SET email = $1
       WHERE id = $2
       RETURNING *`,
      [newEmail, id]
    );
    return result.rows[0];
  }

  // DELETE
  async deleteUser(id: number) {
    await this.client.query(
      `DELETE FROM users WHERE id = $1`,
      [id]
    );
  }
}
