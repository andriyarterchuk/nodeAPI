import uuidv1 from 'uuid/v1';

const getHandlers = (connection: any) => {
  async function getUserById(id: number) {
    const result = await connection.query(`SELECT * FROM users WHERE uuid = ?`, [id]);
    return result;
  }

  async function create(ctx: any) {
    const { username, firstName, lastName, email, password } = ctx.request.body;
    const result = await connection.query(`INSERT INTO users VALUES (?, ?, ?, ?, ?)`, [uuidv1(), username, firstName, lastName, email, password]);

    ctx.body = result;
    ctx.status = 200;
  }

  return {
    getUserById,
    create
  }
}

export default getHandlers;
