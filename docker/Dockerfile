FROM node:14
WORKDIR /
COPY ./frontend/package*.json ./
RUN npm i
COPY ./frontend .
RUN npm run-script build
CMD [ "npm", "start" ]