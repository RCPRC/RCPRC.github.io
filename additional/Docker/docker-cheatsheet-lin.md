# Docker-Cheatsheet - Linux
A cheatsheet made exclusively for docker.

## Installing Docker on Linux

###### Step 1: Update your system
Before installing Docker on Linux, you should update your system to ensure that you have the latest software packages. Open a terminal and run the following commands:

```
sudo apt-get update
sudo apt-get upgrade
```

###### Step 2: Install Docker Engine
To install Docker on Linux, you need to install the Docker Engine package. Open a terminal and run the following command:

```
sudo apt-get install docker.io
```

This will install the Docker Engine package on your system.

###### Step 3: Start the Docker service
After installing Docker Engine, you need to start the Docker service. Run the following command to start the Docker service:

```
sudo systemctl start docker
```

###### Step 4: Test your Docker installation
To test your Docker installation, run the following command:

```
sudo docker run hello-world
```

This will download a small Docker image and run it in a container. If everything is working correctly, you should see a message that says "Hello from Docker!" followed by some additional information.

Congratulations, you've successfully installed Docker on your Windows or Linux machine!

###### Step 5: Additional view your Docker installation
Open command prompt or PowerShell terminal and run following command to see you docker installations:
```
docker ps
```


###### Basic Commands

- `docker run [image]`: Creates and starts a container based on a Docker image.
- `docker images`: Lists all images on your system.
- `docker stop [container]`: Stops a running container.
- `docker rm [container]`: Deletes a stopped container.
- `docker rmi [image]`: Deletes an image from your system.
- `docker exec [container] [command]`: Executes a command inside a running container.

###### Essential Commands

- `docker build [path/to/dockerfile]`: Builds a Docker image from a Dockerfile.
- `docker pull [image]`: Downloads a Docker image from a Docker registry.
- `docker push [image]`: Pushes a Docker image to a Docker registry.
- `docker-compose up`: Builds and starts containers defined in a Compose file.
- `docker-compose down`: Stops and removes containers defined in a Compose file.

###### Advanced Commands

- `docker network create [name]`: Creates a Docker network for communication between containers.
- `docker volume create [name]`: Creates a Docker volume for persistent data storage.
- `docker swarm init`: Initializes a Docker Swarm for managing a cluster of Docker nodes.
- `docker service create [image]`: Creates a Docker service for running a container on a Swarm node.
- `docker stack deploy [stack]`: Deploys a Compose file as a stack on a Docker Swarm.

###### Docker Image Commands

- `docker image ls`: Lists all images on your system.
- `docker image rm [image]`: Deletes an image from your system.
- `docker image pull [image]`: Downloads a Docker image from a Docker registry.
- `docker image push [image]`: Pushes a Docker image to a Docker registry.
- `docker image build [path/to/dockerfile]`: Builds a Docker image from a Dockerfile.

###### Docker Container Commands

- `docker container ls`: Lists all running containers.
- `docker container ls -a`: Lists all containers (both running and stopped).
- `docker container start [container]`: Starts a stopped container.
- `docker container stop [container]`: Stops a running container.
- `docker container rm [container]`: Deletes a stopped container.
- `docker container exec [container] [command]`: Executes a command inside a running container.
- `docker container logs [container]`: Shows the logs of a container.

###### Docker Network Commands

- `docker network ls`: Lists all Docker networks on your system.
- `docker network create [name]`: Creates a Docker network for communication between containers.
- `docker network rm [name]`: Deletes a Docker network.

###### Docker Volume Commands

- `docker volume ls`: Lists all Docker volumes on your system.
- `docker volume create [name]`: Creates a Docker volume for persistent data storage.
- `docker volume rm [name]`: Deletes a Docker volume.

###### Docker Swarm Commands

- `docker swarm init`: Initializes a Docker Swarm for managing a cluster of Docker nodes.
- `docker swarm join`: Joins a Docker node to a Swarm.
- `docker service create [image]`: Creates a Docker service for running a container on a Swarm node.
- `docker service ls`: Lists all services in a Swarm.
- `docker stack deploy [stack]`: Deploys a Compose file as a stack on a Docker Swarm.

###### How to run a new Container

Start a new Container from an image<br>
Syntax: `docker run IMAGE`<br>
Example: `docker run nginx`

...and assign it a name<br>
Syntax: `docker run --name CONTAINER IMAGE`<br>
Example: `docker run --name web nginx`

...and map a port<br>
Syntax: `docker run -P HOSTPORT:CONTAINERPORT IMAGE`<br>
Example: `docker run -P 8080:80 nginx`

...to map all ports<br>
Syntax: `docker run -P IMAGE`<br>
Example: `docker run -P nginx`

...to start a container in the background<br>
Syntax: `docker run -d IMAGE`<br>
Example: `docker rund -d nginx`

...to assign a hostname<br>
Syntax: `docker run --hostname HOSTNAME IMAGE`<br>
Example: `docker run --hostname srv nginx`

...and add dns entry<br>
Syntax: `docker run --add-host HOSTNAME:IP IMAGE`<br>
Example: `docker run --add-host srv:127.0.0.1 nginx`

...and map a local directory into the container<br>
Syntax: `docker run -v HOSTDIR:TARGETDIR IMAGE`<br>
Example: `docker run -v ~/:/usr/share/nginx`

...change the entrancepoint<br>
Syntax: `docker run -it --entrypoint EXECUTABLE IMAGE` <br>
Example: `docker run -it --entrypoint bash ngi`

###### How to manage Containers
Show a list of running containers
- `docker ps`

Show a lost of all running containers
- `docker ps -a`

Delete a container
- `docker rm CONTAINER`

Delete a running container
- `docker rm -f CONTAINER`

Delete stopped containers
- `docker container prune`

Stop a running container
- `docker stop CONTAINER`

Start a stopped container
- `docker start CONTAINER`

Copy a file from a container to the host
- `docker cp TARGET:SOURCEPATH TARGET`

Copy a file fromt the host to a container
- `docker cp TARGET CONTAINER:SOURCEPATH`

Start a shell inside a running container
- `docker exec -it CONTAINTER EXECUTABLE`

Rename container
- `docker rename OLD_NAME NEW_NAME`

Create an image out of container
- `docker commit CONTAINER`

###### How to manage Images
Download an image<br>
Syntax: `docker pull IMAGE[:TAG]`<br>
Example: `docker pull pihole:latest`

Upload an image toa repository
Syntax: `docker push IMAGE`
Example: `docker push myimage:1.0`

Delete an image<br>
Syntax: `docker rmi IMAGE`<br>
Example: `docker rmi pihole`

Show a list of all images<br>
Syntax: `docker images`<br>
Example: `docker images`

Delete dangling images<br>
Syntax: `docker image prune`<br>
Example: `docker image prune`

Delete all unused images<br>
Syntax: `docker image prune -a`<br>
Example: `docker image prune -a`

Build an Image from a Dockerfile<br>
Syntax: `docker build DIRECTORY`<br>
Example: `docker build desktop/docker`

Tag an image<br>
Syntax: `docker tag IMAGE NEWIMAGE`<br>
Example: `docker tag ubuntu ubuntu:22.04`

Build and tag an image from a Dockerfile<br>
Syntax: `docker build -t IMAGE DIRECTORY`<br>
Example: `docker build -t myimage desktop/docker`

Save an image to .tar file<br>
Syntax: `docker save IMAGE > FILE`<br>
Example: `docker save nginx > nginx.tar`

Load an image from a .tar file<br>
Syntax: `docker load -i TARFILE`<br>
Example: `docker load -i nginx.tar`

###### How to show info and stats
Show the logs of a container<br>
Syntax: `docker logs CONTAINER`<br>
Example: `docker logs pihole`

Show stats of running containers<br>
Syntax: `docker stats`<br>
Example: `docker stats`

Show processes of container<br>
Syntax: `docker top CONTAINER`<br>
Example: `docker top pihole`

show installed docker version<br>
Syntax: `docker version`<br>
Example: `docker version`

Get detailed information about an object<br>
Syntax: `docker inspect NAME`<br>
Example: `docker inspect nginx`

Show all modified files in container<br>
Syntax: `docker diff CONTAINER`<br>
Example: `docker diff web`

Sho mapped ports of a container<br>
Syntax:  `docker port CONTAINER`<br>
Example: `docker port web`