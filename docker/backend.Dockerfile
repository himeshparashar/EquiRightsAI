FROM node:14-alpine
WORKDIR /dist
COPY backend/package.json ./
RUN npm install
COPY backend/. .
EXPOSE 5000
CMD ["npm", "run", "dev"]