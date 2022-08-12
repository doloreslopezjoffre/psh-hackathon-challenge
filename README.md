# PSH Hackathon challenge
**Submission by Dolores Lopez Joffre 👩🏽‍💻**

## Stack
**Frontend**
- ReactJS + Typescript
- [React Router DOM](https://reactrouter.com) + [use-eazy-auth](https://github.com/inmagik/use-eazy-auth) for login protected routes
- [Axios](https://axios-http.com) for backend requests
- [Zustand](https://github.com/pmndrs/zustand) store
- [TailwindCSS](https://tailwindcss.com) for styling
- [Eslint rules file](frontend/.eslintrc.js)


## Running for development
- Install dependencies with `yarn`
- Watch changes on frontend with `yarn dev`
- Run Django server with `python manage.py runserver` on port 8000

## Populate db
- Add job with `python manage.py crontab add`
- Start running with `python manage.py crontab run [hash]`
- Hackathons + 11 to 25 developers will be added every 5 mins
