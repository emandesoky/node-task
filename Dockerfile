FROM node:14-alpine
WORKDIR /app
COPY node.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD node node.js
