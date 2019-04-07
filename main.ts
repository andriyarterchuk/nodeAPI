import dotenv from "dotenv";
import BaseService from "BaseService/service";
import hotelRoutes from "services/Hotel";

dotenv.config();

const Hotel = new BaseService("", "Hotel");
Hotel.addRouting(hotelRoutes);
Hotel.listen();
