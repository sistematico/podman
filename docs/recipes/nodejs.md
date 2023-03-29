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

**Build image**

```bash
podman build -t nodejs -f ./Podmanfile
```

## Creating Node.js Container

**Syntax**

```bash
podman run --name [NAME] -p [EXTERNAL_PORT]:[INTERNAL_PORT] -v [EXTERNAL_VOLUME]:[INTERNAL_VOLUME] -d [CONTAINER_NAME]
```

**Example**

```bash
podman run --name node -p 3000:3000 -v $HOME/nodejs-app:/app -d node
```

## Attach Node.js container to a pod

```bash
podman run --name node --pod mypod -p 80:80 -v $HOME/htdocs:/app -d node
```

## More information

- [Podman run docs](https://docs.podman.io/en/latest/markdown/podman-run.1.html)
- [DockerHub Node](https://hub.docker.com/_/node)
- [Node.js Container](https://developers.redhat.com/articles/nodejs-container)
