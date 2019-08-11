import uuidv1 from 'uuid/v1';
import { Connection } from "mysql";
import { HotelHandlers, getHandlers, NewHotel, RequestResponse } from '../../interfaces';

// const getHandlers : getHandlers = <HotelHandlers>(connection: any): HotelHandlers => {
const getHandlers = (connection: Connection): HotelHandlers => {
  
  async function getAllHotels(): Promise<RequestResponse> {
    const result = await connection.query("SELECT * FROM hotels", null);
    return { result, status: 200 };
  }

  async function getHotelById(id: string): Promise<RequestResponse> {
    const result = await connection.query(`SELECT * FROM hotels WHERE uuid = ?`, [id]);
    return { result, status: 200 };
  }

  async function createHotel(params: NewHotel): Promise<RequestResponse> {
    const { name, description, rating, coords } = params;
    const result = await connection.query(`INSERT INTO hotels VALUES (?, ?, ?, ?, ?)`, [uuidv1(), name, description, rating, coords]);
    return { result, status: 200 };
  }

  return {
    getAllHotels,
    getHotelById,
    createHotel
  };
}

export default getHandlers;
