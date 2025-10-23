FROM node:18
WORKDIR /app

# Nur falls du ein package.json hast
COPY package*.json ./
RUN npm install

# Restliche Files
COPY . .

# Cloud Run erwartet Port aus $PORT
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
