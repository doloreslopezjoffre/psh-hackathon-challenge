# PSH Hackathon challenge
**Submission by Dolores Lopez Joffre 👩🏽‍💻**

## Stack
**Frontend**
- ReactJS + Typescript
- [React Router DOM](https://reactrouter.com) + [use-eazy-auth](https://github.com/inmagik/use-eazy-auth) for login protected routes
- [Axios](https://axios-http.com) for backend requests
- [Zustand](https://github.com/pmndrs/zustand) store
- [React Hook Form](https://react-hook-form.com) forms with [Yup](https://github.com/jquense/yup) validation
- [TailwindCSS](https://tailwindcss.com) for styling
- [Eslint rules file](frontend/.eslintrc.js)

**Backend**
- Django + Django REST Framework
- [SIMPLE JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest) plugin for login protected endpoints
- [Webpack loader](https://github.com/django-webpack/django-webpack-loader) for bundling and serving frontend static files on the fly
- [Factory Boy](https://factoryboy.readthedocs.io/en/stable) model factories + [Django REST framework](https://www.django-rest-framework.org/api-guide/serializers) model serializers
- [Crontab](https://github.com/kraiz/django-crontab) for job scheduling
- [Faker](https://github.com/joke2k/faker) for miscellaneous fake data generation + randomuser.me/api for fake users


## Running for development
- Install dependencies with `yarn`
- Watch changes on frontend with `yarn dev`
- Run Django server with `python manage.py runserver` on port 8000

## Populate db
- Add job with `python manage.py crontab add`
- Start running with `python manage.py crontab run [hash]`
- Hackathons + 11 to 25 developers will be added every 5 mins
