import uuidv1 from 'uuid/v1';

const getHandlers = (connection: any) => {
  async function getUserById(ctx: any) {
    const id = ctx.params.id;
    const result = await connection.query(`SELECT * FROM users WHERE uuid = ?`, [id]);

    ctx.body = result;
    ctx.status = 200;
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
