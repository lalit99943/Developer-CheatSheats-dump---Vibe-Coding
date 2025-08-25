import { CheatSheet } from '../../types';

export const kubernetesCheatSheets: CheatSheet[] = [
  {
    id: 'k8s-1',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Get Resource Information',
    type: 'code',
    snippet: 'kubectl get pods\nkubectl get services -n <namespace>\nkubectl get deployments -A\nkubectl get nodes -o wide',
    description: 'Lists resources. Use `-n` for a specific namespace, `-A` or `--all-namespaces` for all. Use `-o wide` for more details.',
    tags: ['kubernetes', 'kubectl', 'get', 'pods', 'services', 'deployments', 'cluster'],
  },
  {
    id: 'k8s-2',
    category: 'Kubernetes',
    subCategory: 'bash',
    title: 'Describe a Resource',
    type: 'code',
    snippet: 'kubectl describe pod <pod_name>\nkubectl describe service <service_name>',
    description: 'Shows detailed information about a specific resource, including its configuration, status, events, and related resources. Very useful for debugging.',
    tags: ['kubernetes', 'kubectl', 'describe', 'debug', 'pod', 'details'],
  },
];
