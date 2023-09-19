# Stage 1: Build the React application
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Stage 2: Use Nginx to serve the static files
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
# Copy the custom Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]