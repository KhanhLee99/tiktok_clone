FROM node:18-alpine
WORKDIR /tiktok_clone_front
COPY . .
RUN yarn install
CMD ["yarn", "run", "start"]