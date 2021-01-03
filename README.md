# "Reddit"-clone

## Overview

### Home Page

![home](https://user-images.githubusercontent.com/25560419/103473928-e1b5e100-4dd8-11eb-9162-55dbc864e4c2.gif)

### Register/Login

![login](https://user-images.githubusercontent.com/25560419/103473908-9ac7eb80-4dd8-11eb-9ee1-6f94250f4139.gif)

### Create/Edit/Delete Post

![post](https://user-images.githubusercontent.com/25560419/103473945-280b4000-4dd9-11eb-9a10-a45f1e21052a.gif)

### Forget and Change Password

![forgetpwd](https://user-images.githubusercontent.com/25560419/103473949-3194a800-4dd9-11eb-9272-0b707d8c7e77.gif)

![changepwd](https://user-images.githubusercontent.com/25560419/103473951-39ece300-4dd9-11eb-9c76-069c9699bf93.gif)

## How to Run/Build

### Backend

#### Development

Prerequisite: Redis, PostgreSQL

```
cd reddit-clone-api
-> rename .ormconfig.json -> ormconfig.json and fill in the credentials accordingly
-> rename .env.example -> .env and fill in the credentials accordingly
yarn
yarn dev
```

#### Build/Production

Prerequisite: Docker

```
cd reddit-clone-api
docker-compose-up
```

### Frontend

#### Development

```
cd reddit-clone-web
yarn
yarn dev
```

You can add more GraphQL Queries/Mutations inside `reddit-clone-web/src/graphql/**` directory. Afterwards, run command `yarn gen` to generate the typing for the queries/mutations.

#### Build/Production

```
cd reddit-clone-web
yarn
yarn build
```

## Tech Stack

### Frontend

![Typescript](https://user-images.githubusercontent.com/25560419/103473329-49b4f900-4dd2-11eb-99b3-c25102dab009.png)
![React](https://user-images.githubusercontent.com/25560419/103473330-4c175300-4dd2-11eb-83fb-7bcdbbcf67f6.png)
![GraphQL](https://user-images.githubusercontent.com/25560419/103473317-2d18c100-4dd2-11eb-95d5-2fbfa2c8b6b5.png)

![apollo](https://user-images.githubusercontent.com/25560419/103473352-87198680-4dd2-11eb-8ab0-8a2858727b7a.png)
![nextjs](https://user-images.githubusercontent.com/25560419/103473370-b203da80-4dd2-11eb-94da-04bc450608e7.png)

### Backend Server

![Typescript](https://user-images.githubusercontent.com/25560419/103473329-49b4f900-4dd2-11eb-99b3-c25102dab009.png)
![GraphQL](https://user-images.githubusercontent.com/25560419/103473317-2d18c100-4dd2-11eb-95d5-2fbfa2c8b6b5.png)
![apollo](https://user-images.githubusercontent.com/25560419/103473352-87198680-4dd2-11eb-8ab0-8a2858727b7a.png)
![nodejs](https://user-images.githubusercontent.com/25560419/103473450-c72d3900-4dd3-11eb-912a-1e7732ae19dd.png)
![express](https://user-images.githubusercontent.com/25560419/103473461-e7f58e80-4dd3-11eb-9f0b-22f5a3499d2a.png)
![typeorm](https://user-images.githubusercontent.com/25560419/103473468-0c516b00-4dd4-11eb-84c1-bba111ebb967.png)
![postgresql](https://user-images.githubusercontent.com/25560419/103473479-255a1c00-4dd4-11eb-95aa-637468770cc3.png)
![redis-logo](https://user-images.githubusercontent.com/25560419/103473492-3a36af80-4dd4-11eb-887a-2b97197b3aa2.png)
