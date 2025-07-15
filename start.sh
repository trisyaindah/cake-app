#!/bin/bash

# Generate app key (jika belum ada)
if [ -z "$APP_KEY" ]; then
  php artisan key:generate
fi

# Cache config
php artisan config:cache
php artisan route:cache

# Jalankan Laravel
php artisan serve --host=0.0.0.0 --port=${PORT:-8000}
