import {JWT_TOKEN} from '../config';
import {removeValue, saveValue} from './storageUtil';

export default {
  login: async ({email, password}) => {
    console.log('[SIGNIN] -> {email, password}: ', {email, password});
    const token = 'q@WdlFQgw21ew132flp51qw';

    await saveValue(JWT_TOKEN, token);

    return {token, email};
  },
  logout: async () => {
    await removeValue(JWT_TOKEN);
  },
};
