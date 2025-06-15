# frontend/Dockerfile

FROM node:18-alpine

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app/

# Exposer le port 3000 pour React
EXPOSE 3000

CMD ["npm", "start"]
