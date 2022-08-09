FROM node:18-alpine
WORKDIR /core
COPY package.json .
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]