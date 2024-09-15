FROM node:18
WORKDIR /app
RUN npm install -g serve
COPY . .
EXPOSE 8080
CMD ["serve", "-s", ".", "-p", "8080"]