const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  publicRuntimeConfig: {
    BE_URL: process.env.BE_URL || "https://ng1.550studios.com",
  },
};
