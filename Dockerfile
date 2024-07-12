FROM node:20
WORKDIR /server
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm","start"]


#docker-compose up --build

#wsl --update