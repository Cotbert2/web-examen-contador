# Velocimeter counter

the current app aims to be a simple velocimeter counter, it will count the number of times the user clicks on a button and display the result in a text field.

# build

To build the app, you need to have the following tools installed:
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

To build the app, run the following command in the root directory of the project:

```bash
cd garcia-mateo-ex2-contador
npm install
ng serve
```

# create a docker image
Once you have change the directory to garcia-mateo-ex2-contador follow the next steps to create a docker image:
Docker file is already created, you just need to run the following command:
```bash
docker build -t garcia-mateo-ex2-contador .
```
# run the docker image
Once you have created the docker image, you can run it with the following command:
```bash
docker run -dit -p 8080:80  --name contador --rm garcia-mateo-ex2-contador
```

# Upload to Docker Hub
To upload the image to Docker Hub, you need to have a Docker Hub account and be logged in to your account. You can log in with the following command:
```bash
docker login
```
Once you are logged in, you can tag the image with your Docker Hub username and then push it to Docker Hub:
**Keep in mind that you need to change the username to your own Docker Hub username.**
```bash
docker tag garcia-mateo-ex2-contador cotbert2/garcia-mateo-ex2-contador
docker push cotbert2/garcia-mateo-ex2-contador
```




