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

### Images

**Download a image**

```bash
podman pull alpine:latest
```

**Run a image**

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

**Build from Podfile**

```bash
podman build -t my-custom-alpine -f Podfile .
```

Or (if file is named `Dockerfile`)

```bash
podman build -t my-custom-alpine .
```

**Test custom image**

```bash
podman run my-custom-alpine curl --version
```