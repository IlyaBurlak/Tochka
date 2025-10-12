#  Развертывание Tochka Shop

## Подготовка к продакшену

### 1. Переменные окружения

Создайте файл `.env.production` с переменными для продакшена:

```env
VITE_API_URL=https://api.tochka-shop.ru
VITE_APP_NAME=Tochka Shop
VITE_APP_VERSION=1.0.0
```

### 2. Сборка проекта

```bash
npm run build
```

### 3. Проверка сборки

```bash
npm run preview
```

## Варианты развертывания

### Vercel (Рекомендуется)

1. Подключите репозиторий к Vercel
2. Настройте переменные окружения в панели Vercel
3. Домен будет автоматически настроен

### Netlify

1. Подключите репозиторий к Netlify
2. Настройте build command: `npm run build`
3. Настройте publish directory: `dist`

### VPS/Сервер

1. Загрузите файлы из папки `dist/` на сервер
2. Настройте веб-сервер (Nginx/Apache) для обслуживания статических файлов
3. Настройте SSL сертификат

### Docker

Создайте `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Настройка домена

### DNS настройки

1. Добавьте A-запись, указывающую на IP сервера
2. Добавьте CNAME для www.tochka-shop.ru
3. Настройте SSL сертификат (Let's Encrypt)

### Nginx конфигурация

```nginx
server {
    listen 80;
    server_name tochka-shop.ru www.tochka-shop.ru;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name tochka-shop.ru www.tochka-shop.ru;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    root /var/www/tochka-shop/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Мониторинг и аналитика

### Google Analytics

Добавьте в `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Яндекс.Метрика

```html
<!-- Yandex.Metrica -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");

   ym(COUNTER_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

## Оптимизация производительности

### Сжатие файлов

```bash
# Установка gzip
npm install -g gzip-cli

# Сжатие файлов
gzip -k dist/assets/*.js
gzip -k dist/assets/*.css
```

### CDN

Настройте CDN для статических ресурсов:
- Cloudflare
- AWS CloudFront
- Яндекс CDN

## Безопасность

### HTTPS

Обязательно используйте HTTPS в продакшене.

### CSP заголовки

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;";
```

### Заголовки безопасности

```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## Резервное копирование

### Автоматические бэкапы

```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "backup_${DATE}.tar.gz" /var/www/tochka-shop/
```

## Мониторинг

### Uptime мониторинг

- UptimeRobot
- Pingdom
- StatusCake

### Логи

Настройте ротацию логов:

```nginx
access_log /var/log/nginx/tochka-shop.access.log;
error_log /var/log/nginx/tochka-shop.error.log;
```
