1.  python3 --version
2. python3 -m venv --without-pip virtual
3. source virtual/bin/activate
4. curl https://bootstrap.pypa.io/get-pip.py|python - gets latest version of pip
5. pip install django
6. django-admin startproject projectName .
7. django-admin startapp appName
8. python3 manage.py migrate
9. python3 manage.py runserver
10. add templates, urls.py and static files
10. npm init -y - initialize npm
11. install all requirements/dependencies
12. npm i webpack webpack-cli - install webpack
13. setup script: "build": "webpack",
14. in the root module set-up webpack.config.js  `module.exports = {mode: 'development', entry: './appName/static/js/index.js'}` 
15. npm run build and change script tag to  `<script src="{% static 'main.js' %}"></script>`
16. add  `STATICFILES_DIRS = ['dist']` to your settings.py
17. npm i -D webpack-dev-server and include script: "start" : "webpack serve" - allows for compilation without reloading
18. npm start to get the url that the project is running on
19. change the settings.py static url to the url above 
20. npm i -D nodemon and change script to "start" : "nodemon -w webpack.config.js -x webpack serve"
21. you now need to simultaneously run  `python3 manage.py runserver` and  `npm start`
22. enable hot module reloading "start" : "nodemon -w webpack.config.js -x webpack serve --hot" and add  `output: {publicPath: 'http://127.0.0.1:8080/'},devServer:{headers: {'Access-Control-Allow-Origin': '*',}},` to webpack.config.js
23. install and configure necessary loaders i.e sass-loader etc


RESOURCES
- https://www.robinwieruch.de/webpack-css/