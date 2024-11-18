# Kubernetes

## Basic Components

There are some basic components in Kubernetes:

- Pod
- Deployment
- Service
- Secret
- Volumes
- Persistent Volumes
- Persistent Volume Claims
  -ReplicaSet

To create secret,we need to run the following command:

```bash
kubectl create secret generic secret_name --from-literal=key1=value1 --from-literal=key2=value2
```
