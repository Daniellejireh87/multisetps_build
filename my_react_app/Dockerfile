# === 1) Build React en prod ===
FROM node:24.2.0 AS builder
WORKDIR /app

# copie uniquement package.json et package-lock.json pour tirer parti du cache
COPY package*.json ./
RUN npm ci --no-cache && npm cache clean --force

# copie le reste du code et lance le build
COPY . .
RUN npm run build

# === 2) Image finale avec Nginx ===
FROM nginx:alpine
# copie ta config custom (voir étape 3)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# copie uniquement le dossier build issu de l’étape précédente
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
