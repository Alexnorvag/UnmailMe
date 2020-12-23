import {store} from '../utils/httpUtil';

export const unsubscribe = async ({image}) => {
  try {
    const res = await store('api/unsubscribe', {image});

    return res.data;
  } catch (error) {
    throw new Error(`😱 unsubscribing request failed: ${error}`);
  }
};

export const switchToEmail = async ({image, email}) => {
  try {
    const res = await store('api/switch_to_email', {image, email});

    return res.data;
  } catch (error) {
    throw new Error(`😱 switching to email request failed: ${error}`);
  }
};

export const wrongAddress = async ({image}) => {
  try {
    const res = await store('api/wrong_address', {image});

    return res.data;
  } catch (error) {
    throw new Error(`😱 wrong address request failed: ${error}`);
  }
};
