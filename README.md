# Vite

This project is made in [Vite](https://vitejs.dev/)

# Running docker 

First build the docker file and name it
``docker build -t vite .``

Then run the dockerfile.
``docker run -d --rm -p 5137:5137 --name vite vite``

The service will run on localhost:5137
