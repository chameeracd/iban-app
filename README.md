# React + Vite - IBAN APP

Laravel 10 React app for IBAN Validation

## setup

```
git clone git@github.com:chameeracd/iban-app.git
cd iban-app
npm install
cd api
composer update
```
create ``.env`` file in api dir and configure it

run;
```
php artisan migrate
php artisan db:seed
```
inside api dir

run ``php artisan app:create-admin 111111`` inside api dir (this will create the admin user admin@example.com with password '111111' )

create ``.env`` file in root and set ``VITE_BASE_API_URL=http://localhost:8000/api``

from root : ``npm run start``

application will be loaded on ``http://localhost:3000/``
