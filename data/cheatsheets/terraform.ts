import { CheatSheet } from '../../types';

export const terraformCheatSheets: CheatSheet[] = [
  {
    id: 'terraform-1',
    category: 'Terraform',
    subCategory: 'bash',
    title: 'Initialize a Working Directory',
    snippet: 'terraform init',
    description: 'Initializes a new or existing Terraform working directory by downloading necessary provider plugins and setting up the backend.',
    tags: ['terraform', 'cli', 'init', 'setup', 'provider'],
  },
  {
    id: 'terraform-2',
    category: 'Terraform',
    subCategory: 'bash',
    title: 'Create an Execution Plan',
    snippet: 'terraform plan',
    description: 'Creates an execution plan, which lets you preview the changes Terraform plans to make to your infrastructure. It is a dry run and is highly recommended before applying changes.',
    tags: ['terraform', 'cli', 'plan', 'preview', 'dry-run'],
  },
  {
    id: 'terraform-3',
    category: 'Terraform',
    subCategory: 'bash',
    title: 'Apply Infrastructure Changes',
    snippet: 'terraform apply',
    description: 'Applies the changes required to reach the desired state of the configuration. Terraform will create, modify, or destroy infrastructure as needed.',
    tags: ['terraform', 'cli', 'apply', 'deploy', 'infrastructure'],
  },
  {
    id: 'terraform-4',
    category: 'Terraform',
    subCategory: 'bash',
    title: 'Destroy Infrastructure',
    snippet: 'terraform destroy',
    description: 'Destroys all the resources managed by the current Terraform configuration. Use with extreme caution.',
    tags: ['terraform', 'cli', 'destroy', 'delete', 'cleanup'],
  },
  {
    id: 'terraform-5',
    category: 'Terraform',
    subCategory: 'hcl',
    title: 'Basic HCL Resource Definition',
    snippet: `provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}`,
    description: 'HashiCorp Configuration Language (HCL) syntax for defining an AWS provider and creating a single EC2 instance resource.',
    tags: ['terraform', 'hcl', 'syntax', 'resource', 'provider', 'aws'],
  },
  {
    id: 'terraform-6',
    category: 'Terraform',
    subCategory: 'bash',
    title: 'Format and Validate Configuration',
    snippet: 'terraform fmt\nterraform validate',
    description: '`terraform fmt` rewrites configuration files to a canonical format and style. `terraform validate` checks whether a configuration is syntactically valid and internally consistent.',
    tags: ['terraform', 'cli', 'fmt', 'validate', 'lint', 'syntax'],
  },
];
