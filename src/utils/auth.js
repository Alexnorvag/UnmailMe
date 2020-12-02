import {JWT_TOKEN} from '../config';
import {signin} from '../services/auth';
import {removeValue, saveValue} from './storageUtil';

export default {
  login: async ({email, password}) => {
    console.log('[SIGNIN] -> {email, password}: ', {email, password});
    const {token} = await signin({email, password});

    await saveValue(JWT_TOKEN, token);

    return {token, email};
  },
  logout: async () => {
    await removeValue(JWT_TOKEN);
  },
};
