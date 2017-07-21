# About

Experiments with APIs and react. 
Nothing to see here. 
Move along please

# Running discovery-app locally

## Prepare

clone the app and `cd` to the directory

```shell
git clone https://github.com/irishdan/discovery-app-react
```

## Install dependencies via npm

```shell
npm install
```

## Install dependencies via yarn

```shell
yarn
```

## Start the app

```shell
npm start
```

Open `http://0.0.0.0:9020` in your browser to see the app.

Yarn users alternatively can use `yarn start` to start the app.

# Using Docker

clone the app and `cd` to the directory

```shell
git clone https://github.com/irishdan/discovery-app-react
```

Build the docker image

```shell
docker build -t discovery-app .
```

Run the docker image

```shell
docker run -it --rm -p 9020:9020 discovery-app
```

Open `http://0.0.0.0:9020` in your browser to see the app
