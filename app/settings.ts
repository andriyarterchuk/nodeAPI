import { config } from 'dotenv';
const { env } = process;

const { parsed } = config({
  path: '../.env'
});

const {
  hotel_port,
}: any = { ...env, ...parsed };

export default {
  hotel: {
    name: 'hotel',
    port: hotel_port,
    db: {
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: '12345678',
      database: 'node_db'
    }
  }
}