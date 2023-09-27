# CheatSheet

Podman cheatsheet.

## Pods

**Create a pod**

```bash
podman pod create --name mypod --share ipc,uts
```

## Containers

**Create a container**

```bash
podman create alpine --name alpine ls
```

**Create a container attached to a pod**

```bash
podman create --name=alpine --pod=mypod alpine ls
```

**Create a container and attach to a NEW pod**

```bash
podman create --name=alpine --pod=new:alpine-pod alpine ls
```

### Imagens

**Baixar uma imagem**

```bash
podman pull alpine:latest
```

**Rodar a imagem**

```bash
podman run alpine:latest echo "Hello Alpine!"
```

#### Podfile 

**Podfile**

```bash
# Use a imagem oficial do Alpine como base
FROM alpine:latest

# Instale um pacote como exemplo (por exemplo, curl)
RUN apk add --no-cache curl

# Outras instruções de personalização podem ser adicionadas aqui
```

**Construir a partir de Podfile**

```bash
podman build -t my-custom-alpine -f Podfile .
```

Or (if file is named `Dockerfile`)

```bash
podman build -t my-custom-alpine .
```

**Testar a imagem**

```bash
podman run my-custom-alpine curl --version
```

## Compose

**Exemplo do arquivo podman-compose.yml**

```bash
services:
  frontend:
    image: example/webapp
    ports:
      - "443:8043"
    networks:
      - front-tier
      - back-tier
    configs:
      - httpd-config
    secrets:
      - server-certificate

  backend:
    image: example/database
    volumes:
      - db-data:/etc/data
    networks:
      - back-tier

volumes:
  db-data:
    driver: flocker
    driver_opts:
      size: "10GiB"

configs:
  httpd-config:
    external: true

secrets:
  server-certificate:
    external: true

networks:
  # The presence of these objects is sufficient to define them
  front-tier: {}
  back-tier: {}

```