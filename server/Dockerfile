FROM node:9-slim
MAINTAINER Sanuja Methmal <methmal66@yahoo.com>
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]