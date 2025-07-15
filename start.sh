#!/bin/bash

# Generate APP_KEY kalau belum ada
if [ ! -f bootstrap/cache/config.php ]; then
  php artisan key:generate
fi

# Jalankan migrate jika perlu
php artisan migrate --force || true

# Cache config dan route
php artisan config:cache
php artisan route:cache

# Jalankan Laravel pakai host & port yang diminta Railway
php artisan serve --host=0.0.0.0 --port=${PORT:-8000}
