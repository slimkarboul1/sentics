## This app is developed using MERN Stack (Mongo db, Express js, React js and Node js)

The backend is developed using express js , I used mongoose to interact with the database. I added to custom middlewares to handle errors .

I used concurrently to run to both servers at the same time using on command.

In the front-end I used Chart js and Heatmap.js to generate both the graph and the HeatMap components

Before running the project install the node packages following these 2 steps

- npm install (in the root directeroy)
- cd client then npm install (to install front end packages)

To Run the client side use : npm run client
To Run the server side use : npm run server
to run both servers use : npm run dev in the root folder

## PS: you need to make small change in the package.json file in the client folder for the proxy

If you work with docker the proxy should be : "proxy": "http://express:5000"
If you work locally the proxy should be : "proxy": "http://localhost:5000"

I deployed the app using Vercel on this Link (https://sentics-c9uc0uism-slimkarboul1.vercel.app/)
PS: Vercel is using a different Node js version that is causing a porblem with Graph component in the Chart Js library

## Run the application using docker

With one commande you can build and run two containers (one for the server and one for the client) using docker-compose
docker-compose up
