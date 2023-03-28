# PostgreSQL

## Creating PostgreSQL Container

**Syntax**

```bash
podman run --name [NAME] -p [INTERNAL_PORT]:[EXTERNAL_PORT] -e POSTGRES_DB=[DATABASE_NAME] -e POSTGRES_PASSWORD=[DATABASE_PASSWORD] -e POSTGRES_USER=[DATABASE_USER] -d postgres:[IMAGE_VERSION_OR_DISTRO]
```


**Example**

```bash
podman run --name postgres -p 5432:5432 -e POSTGRES_DB=mydb -e POSTGRES_PASSWORD=mypw -e POSTGRES_USER=myuser -d postgres:15-bullseye
```

## More

Check out the Docker documentation for [this image](https://hub.docker.com/_/postgres).
