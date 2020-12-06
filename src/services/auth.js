import {store} from '../utils/httpUtil'

export const signin = async ({email, password}) => {
  try {
    const res = await store('api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    //   email,
    //   password
    });

    console.log('res: ', res.data);
    const {token} = res.data;

    return {token};
  } catch (error) {
    throw new Error(`😱 login reques failed: ${error}`);
  }
};
