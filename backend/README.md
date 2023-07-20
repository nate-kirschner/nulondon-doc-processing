## Set up

Make sure you have `python` or `python3` installed first

1. cd backend
2. Create a python environment with `python -m venv myenv`
3. Activate your environment with `source myenv/bin/activate`
4. install django with `python -m pip install Django`
5. install django's REST API framework with `python -m pip install djangorestframework`

6. install mysqlclient using 

Windows:
```
$ pip install mysqlclient 
```

macOS:
```
$ brew install mysql pkg-config
$ pip install mysqlclient
```

3. clone the repo if you haven't, and then navigate to the backend folder with `cd backend`

4. run `python manage.py runserver` and then go to http://127.0.0.1:8000/ in your browser

5. hopefully you see a success page!
