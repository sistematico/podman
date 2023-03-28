# PostgreSQL

## Creating PostgreSQL Container

**Syntax**

```bash
podman run --name [NAME] -p [EXTERNAL_PORT]:[INTERNAL_PORT] -e POSTGRES_DB=[DATABASE_NAME] -e POSTGRES_PASSWORD=[DATABASE_PASSWORD] -e POSTGRES_USER=[DATABASE_USER] -d postgres:[IMAGE_VERSION_OR_DISTRO]
```

Description:
- `run` run podman command
- `--name` name of container
- `-p` port mappings
- `-e` environment variables
- `-d` detach


**Example**

```bash
podman run --name postgres -p 5432:5432 -e POSTGRES_DB=mydb -e POSTGRES_PASSWORD=mypw -e POSTGRES_USER=myuser -d postgres:15-bullseye
```

## Attach PostgreSQL container to a pod

```bash
podman run --name postgres --pod mypod -p 5432:5432 -e POSTGRES_DB=app -e POSTGRES_PASSWORD=passwd -e POSTGRES_USER=app -d postgres:15
```

## More information

- [Podman run docs](https://docs.podman.io/en/latest/markdown/podman-run.1.html)
- [DockerHub PostgreSQL](https://hub.docker.com/_/postgres)
