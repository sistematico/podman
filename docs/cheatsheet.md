# CheatSheet

Podman cheatsheet.

## Pods

**Create a pod**

```bash
podman pod create --name mypod --share ipc,uts
```

## Container

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