import BaseService from '../../base/service';
import getRouter from './router';
import settings from '../../settings';

const AuthService = new BaseService(settings, settings.auth.name);

AuthService.useMySQL(settings.auth.db);
AuthService.useBodyParser();
AuthService.useRouter(getRouter);
AuthService.listen();


