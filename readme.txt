INSTALLATION :-
1) Install node
2) Download project folder
3) Move inside folder
4) Run command
    npm install
5) Installation deleteOne


START SERVER :-
  node app.js

  Server will start on http://localhost:3000

API -:
1) Get – Get all items from a static dataset

  wget --quiet \
  --method GET \
  --header 'Cache-Control: no-cache' \
  --header 'Postman-Token: 8e0b893e-0f99-331c-9ee0-2a0ab7f799ec' \
  --output-document \
  - http://localhost:3000/user


  curl -X GET \
    http://localhost:3000/user \
    -H 'Cache-Control: no-cache' \
    -H 'Postman-Token: 0dd01ff8-cc42-8adc-e16f-ef03331fddfe'

2) Get/id – get the item with a particular Id from the dataset

  wget --quiet \
    --method GET \
    --header 'Cache-Control: no-cache' \
    --header 'Postman-Token: e62fb539-3c43-4810-c330-78ba37dfe5e7' \
    --output-document \
    - http://localhost:3000/user/1

  curl -X GET \
  http://localhost:3000/user/1 \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: 8fb714fd-b192-51c3-6c21-694462b95ee3'

3) POST – add to the collection (no database necessary, just an in-memory object is ok)

  wget --quiet \
    --method POST \
    --header 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
    --header 'Cache-Control: no-cache' \
    --header 'Postman-Token: d6358f5c-4725-2b51-4d46-6b93211ebb7b' \
    --body-data '------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="name"\r\n\r\nTestName\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="profile_url"\r\n\r\n"http://www.getpostman.com/test\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="username"\r\n\r\ntestname\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="age"\r\n\r\n36\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--' \
    --output-document \
    - http://localhost:3000/user

  curl --request POST \
    --url http://localhost:3000/user \
    --header 'Cache-Control: no-cache' \
    --header 'Postman-Token: 1a63a3a2-5bfa-5a2b-c873-7b7efcd5eec4' \
    --header 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
    --form name=TestName \
    --form 'profile_url="http://www.getpostman.com/test' \
    --form username=testname \
    --form age=36

4) DELETE - Delete one item

  wget --quiet \
    --method DELETE \
    --header 'Cache-Control: no-cache' \
    --header 'Postman-Token: 2071a71b-6f4c-2931-1d18-c714b590f445' \
    --output-document \
    - http://localhost:3000/user/1

  curl --request DELETE \
    --url http://localhost:3000/user/1 \
    --header 'Cache-Control: no-cache' \
    --header 'Postman-Token: 018e16cd-339c-f3c5-ad2c-b741b4a85e31'
