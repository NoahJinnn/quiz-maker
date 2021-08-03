# build environment
FROM node:14-alpine as build

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

EXPOSE 3000

USER node

# Settup ENV
ENV NODE_TLS_REJECT_UNAUTHORIZED 0
EXPOSE 3000
CMD ["yarn", "start", "--hostname", "0.0.0.0", "--port", "3000"]