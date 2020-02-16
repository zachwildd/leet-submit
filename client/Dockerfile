FROM node:alpine
WORKDIR "/client"
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 1337
CMD ["npm", "start"]