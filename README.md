# Prismic Developer Documentation Website

This project is developer documentation website for Prismic built with Next.js. It contains the dev docs homepage as well as all the different articles for each supported language/framework. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to make sure that you have [Node.js](https://nodejs.org/en/) installed on your machine.

After installing Node, run the following command to install now globablly on your machine.

```
npm install -g now
```

### Installing the project dependencies

Run the following command to install the project dependencies:

```
npm install
```

### Run serverless mode locally
As of version 15.0.0 of `now` you can use the `now dev` command to run the project in your local machine in serverless mode. You can use this to set up and test your routing in `now.json` without having to deploy to Now for every small change. Development server will be running in `http://localhost:3000/`

```
now dev
```

or 

```
npm run dev
```

## Deploy to Now 2.0 serverless mode
[Signup for Now](https://zeit.co/now) for deploying your site using serverless features. The required routing and setup files are already included in the project. Just run the `now` command in your project folder if you have installed it, or try the included package.

```
now
```

or

```
npm run deploy
```

## Built With

* [Prismic](https://prismicio-docs.prismic.io/) - Prismic repository
* [Next.js](https://nextjs.org/) - React framework
* [Now - Zeit](https://zeit.co/now) - Serverless deployment
* [Intercom](https://www.intercom.com/) - Chat Service
* [Google Analytics](https://analytics.google.com) - Website Analytics
* [Mixpanel](https://mixpanel.com) - User Behavior Analytics

## Authors

* **Levi Gable** - *Initial work* - [levimykel](https://github.com/levimykel)

See also the list of [contributors](https://github.com/prismicio/prismic-docs/contributors) who participated in this project.

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2019 Prismic (https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
