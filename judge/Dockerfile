FROM node:alpine
WORKDIR "/judge"
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 7331
CMD ["npm", "start"]