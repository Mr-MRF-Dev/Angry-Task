# <Build stage>
FROM node:22.19-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build:prod
# </End of Build stage>

# <Production stage>
FROM nginx:alpine AS production

COPY --from=build /app/dist/angry-task/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# </End of Production stage>
