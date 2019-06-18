import uuidv1 from 'uuid/v1';

const getHandlers = (connection: any) => {
  async function getAll(ctx: any) {
    const results = await connection.query("SELECT * FROM hotels", null);

    ctx.body = { results };
    ctx.status = 200;
  }

  async function getById(ctx: any) {
    const id = ctx.params.id;
    const result = await connection.query(`SELECT * FROM hotels WHERE uuid = ?`, [id]);

    ctx.body = result;
    ctx.status = 200;
  }

  async function create(ctx: any) {
    const { name, description, rating, coords } = ctx.request.body;
    const result = await connection.query(`INSERT INTO hotels VALUES (?, ?, ?, ?, ?)`, [uuidv1(), name, description, rating, coords]);

    ctx.body = result;
    ctx.status = 200;
  }

  return {
    getAll,
    getById,
    create
  }
}

export default getHandlers;
