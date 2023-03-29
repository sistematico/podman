# Nginx

## Creating Nginx Container

**Syntax**

```bash
podman run --name [NAME] -p [EXTERNAL_PORT]:[INTERNAL_PORT] -v [EXTERNAL_VOLUME]:[INTERNAL_VOLUME] -d nginx
```

**Example**

```bash
podman run --name nginx -p 80:80 -v $HOME/htdocs:/app -d nginx
```

## Attach Nginx container to a pod

```bash
podman run --name nginx --pod mypod -p 80:80 -v $HOME/htdocs:/app -d nginx
```

## More information

- [Podman run docs](https://docs.podman.io/en/latest/markdown/podman-run.1.html)
- [DockerHub Nginx](https://hub.docker.com/_/nginx)
