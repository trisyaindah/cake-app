#!/bin/bash

php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan key:generate
php artisan migrate --force || true

php artisan serve --host=0.0.0.0 --port=${PORT:-8000}
