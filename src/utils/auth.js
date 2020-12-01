export default {
  login: async ({email, password}) => {
    console.log('[SIGNIN] -> {email, password}: ', {email, password});
    const token = 'q@WdlFQgw21ew132flp51qw';

    return {token, email};
  },
  logout: async () => {
      
  }
};
