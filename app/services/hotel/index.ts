import BaseService from '../../base/service';
import getRouter from './router';
import settings from '../../settings';

const HotelService = new BaseService(settings, settings.hotel.name);

HotelService.useMySQL(settings.hotel.db);
HotelService.useBodyParser();
HotelService.useRouter(getRouter);
HotelService.listen();

