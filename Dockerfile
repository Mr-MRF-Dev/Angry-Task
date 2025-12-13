# <Build stage>
FROM node:24.12-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build:prod
# </End of Build stage>

# <Production stage>
FROM nginx:alpine AS production

# Repository and maintainer information
LABEL org.opencontainers.image.title="AngryTask"
LABEL org.opencontainers.image.description="💢 Simple and Modern Angular to-do app"
LABEL org.opencontainers.image.authors="Mr-MRF-Dev"
LABEL org.opencontainers.image.url="https://github.com/Mr-MRF-Dev/Angry-Task"
LABEL org.opencontainers.image.source="https://github.com/Mr-MRF-Dev/Angry-Task"
LABEL org.opencontainers.image.documentation="https://github.com/Mr-MRF-Dev/Angry-Task#readme"
LABEL org.opencontainers.image.licenses="MIT"

COPY --from=build /app/dist/angry-task/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# </End of Production stage>
