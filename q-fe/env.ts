import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const { BE_URL = 'https://ng1.550studios.com' } = publicRuntimeConfig as {
  BE_URL: string;
};
