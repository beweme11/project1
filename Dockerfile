# Stage 1: Build the React application
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx and FastAPI
FROM python:3.11-alpine

# Install Nginx
RUN apk add --no-cache nginx

# Copy Nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy React build
COPY --from=build /app/dist /usr/share/nginx/html

# Setup Python backend
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ ./backend/

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Create data directory for SQLite
RUN mkdir -p /data

EXPOSE 80

CMD ["/start.sh"]
