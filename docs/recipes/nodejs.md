# Node.js

## Building Node image

**Podmanfile**

```bash
FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

**Syntax**

```bash
podman build -t [name:tag] -f [DOCKERFILE]
```

Description:
- `build` build an image from Dockerfile
- `-t`, `--tag` name and optionally a tag in the name:tag format
- `-f`, `--file` name of the Dockerfile (Default is PATH/Dockerfile)
- `./Podmanfile` name of the file containg the build instructions

**Build image**

```bash
podman build -t nodejs -f ./Podmanfile
```

## Creating Node.js Container

**Syntax**

```bash
podman run --name [CONTAINER_NAME] -p [EXTERNAL_PORT]:[INTERNAL_PORT] -v [EXTERNAL_VOLUME]:[INTERNAL_VOLUME] [-d|-it] [CONTAINER_IMAGE]
```

Description:
- `run` run a container
- `--name` assign a name to the container
- `-p`, `--expose` expose a port or a range of ports
- `-v`, `--volume` bind mount a volume(`.` or `$(pwd)` is current path)
- `-d`, `--detach` run container in background and print container ID
- `-i`, `--interactive` keep STDIN open even if not attached
- `-t`, `--tty` allocate a pseudo-TTY

**Example**

```bash
podman run --name nodejs_container -it -p 3000:3000 -v .:/app -d nodejs_image
```

## Attach to container

**Syntax**

```bash
podman exec -it [CONTAINER_NAME] [COMMAND]
```

Description:
- `exec` execute a command in a running container
- `-i`, `--interactive` keep STDIN open even if not attached
- `-t`, `--tty` allocate a pseudo-TTY

**Example**

```bash
podman exec -it nodejs_container bash
```

## Attach Node.js container to a pod

```bash
podman run --name nodejs_container --pod mypod -p 80:80 -v .:/app -d nodejs_image
```

## More information

- [Podman run docs](https://docs.podman.io/en/latest/markdown/podman-run.1.html)
- [DockerHub Node](https://hub.docker.com/_/node)
- [Node.js Container](https://developers.redhat.com/articles/nodejs-container)
