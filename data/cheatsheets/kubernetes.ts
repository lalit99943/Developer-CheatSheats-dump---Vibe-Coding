import { CheatSheet } from '../../types';

export const kubernetesCheatSheets: CheatSheet[] = [
  {
    id: 'k8s-1',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Get Resource Information',
    snippet: 'kubectl get pods\nkubectl get services -n <namespace>\nkubectl get deployments -A\nkubectl get nodes -o wide',
    description: 'Lists resources. Use `-n` for a specific namespace, `-A` or `--all-namespaces` for all. Use `-o wide` for more details.',
    tags: ['kubernetes', 'kubectl', 'get', 'pods', 'services', 'deployments', 'cluster'],
  },
  {
    id: 'k8s-2',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Describe a Resource',
    snippet: 'kubectl describe pod <pod-name>',
    description: 'Shows detailed information about a resource, including its configuration, status, events, and related resources. Very useful for debugging.',
    tags: ['kubernetes', 'kubectl', 'describe', 'debug', 'pod', 'events'],
  },
  {
    id: 'k8s-3',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'View Logs',
    snippet: 'kubectl logs <pod-name>\nkubectl logs -f <pod-name> -c <container-name>',
    description: 'Prints the logs for a container in a pod. Use `-f` to follow the log stream in real-time. Use `-c` if the pod has multiple containers.',
    tags: ['kubernetes', 'kubectl', 'logs', 'debug', 'pod', 'container'],
  },
  {
    id: 'k8s-4',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Execute Command in Container',
    snippet: 'kubectl exec -it <pod-name> -- /bin/bash',
    description: 'Opens an interactive shell inside a running container. Useful for debugging and inspecting the container\'s environment.',
    tags: ['kubernetes', 'kubectl', 'exec', 'shell', 'debug', 'interactive'],
  },
  {
    id: 'k8s-5',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Apply a Configuration',
    snippet: 'kubectl apply -f my-manifest.yaml',
    description: 'Applies a configuration to a resource by filename or stdin. This is the standard way to create or update resources from a manifest file.',
    tags: ['kubernetes', 'kubectl', 'apply', 'yaml', 'manifest', 'create', 'update'],
  },
  {
    id: 'k8s-6',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Delete Resources',
    snippet: 'kubectl delete pod <pod-name>\nkubectl delete -f my-manifest.yaml',
    description: 'Deletes resources by name or from a manifest file. Use with caution.',
    tags: ['kubernetes', 'kubectl', 'delete', 'remove', 'pod', 'manifest'],
  },
  {
    id: 'k8s-7',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Manage Context and Cluster',
    snippet: 'kubectl config get-contexts\nkubectl config use-context <context-name>\nkubectl cluster-info',
    description: 'Switch between different Kubernetes clusters/contexts you have configured. `cluster-info` displays endpoint information for the master and services.',
    tags: ['kubernetes', 'kubectl', 'config', 'context', 'cluster'],
  },
  {
    id: 'k8s-8',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Scale a Deployment',
    snippet: 'kubectl scale deployment <deployment-name> --replicas=3',
    description: 'Updates the number of replicas (pods) in a deployment to the desired state.',
    tags: ['kubernetes', 'kubectl', 'scale', 'deployment', 'replicas', 'pods'],
  },
  {
    id: 'k8s-9',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Port Forwarding',
    snippet: 'kubectl port-forward svc/<service-name> 8080:80',
    description: 'Forwards a local port to a port on a pod, service, or deployment. This is useful for accessing an application running in the cluster from your local machine.',
    tags: ['kubernetes', 'kubectl', 'port-forward', 'networking', 'debug', 'proxy'],
  },
  {
    id: 'k8s-10',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Manage Rollouts',
    snippet: 'kubectl rollout status deployment/<deployment-name>\nkubectl rollout history deployment/<deployment-name>\nkubectl rollout undo deployment/<deployment-name>',
    description: 'Check the status of a deployment, view its revision history, or roll back to a previous version.',
    tags: ['kubernetes', 'kubectl', 'rollout', 'deployment', 'update', 'undo', 'history'],
  },
  {
    id: 'k8s-11',
    category: 'Kubernetes',
    subCategory: 'yaml',
    title: 'Simple Pod Manifest',
    snippet: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80`,
    description: 'A minimal YAML manifest for creating a single Nginx pod. This is the smallest deployable unit in Kubernetes.',
    tags: ['kubernetes', 'yaml', 'manifest', 'pod', 'nginx'],
  },
  {
    id: 'k8s-12',
    category: 'Kubernetes',
    subCategory: 'yaml',
    title: 'Simple Deployment Manifest',
    snippet: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80`,
    description: 'A manifest for a Deployment, which manages a ReplicaSet to ensure a specified number of pod replicas are running. This is the standard way to run stateless applications.',
    tags: ['kubernetes', 'yaml', 'manifest', 'deployment', 'replicaset', 'stateless'],
  },
  {
    id: 'k8s-13',
    category: 'Kubernetes',
    subCategory: 'yaml',
    title: 'Simple Service Manifest',
    snippet: `apiVersion: v1
kind: Service
metadata:
  name: my-nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP # NodePort, LoadBalancer`,
    description: 'A manifest for a Service, which defines a logical set of Pods and a policy by which to access them. The `selector` matches the labels of the pods managed by the Deployment. This allows other pods in the cluster to access the Nginx pods.',
    tags: ['kubernetes', 'yaml', 'manifest', 'service', 'networking', 'clusterip'],
  },
];