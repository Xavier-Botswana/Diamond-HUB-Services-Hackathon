FROM node:alpine
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copi>
COPY package*.json ./

RUN npm install

# Bundle app source //
COPY . .

EXPOSE 8000
CMD ["npm", "run", "start"]