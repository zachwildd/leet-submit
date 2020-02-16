FROM node:alpine
WORKDIR "/api"
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 9001
CMD ["npm", "start"]