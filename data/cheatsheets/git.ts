import { CheatSheet } from '../../types';

export const gitCheatSheets: CheatSheet[] = [
  {
    id: 'git-1',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Clone a Repository',
    type: 'code',
    snippet: 'git clone <repository_url>',
    description: 'Creates a local copy of a remote repository on your machine.',
    tags: ['git', 'clone', 'repository', 'version control'],
  },
  {
    id: 'git-2',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Stage and Commit Changes',
    type: 'code',
    snippet: 'git add .\ngit commit -m "Your commit message"',
    description: 'Stages all new and modified files for the next commit, then records the changes to the repository with a descriptive message.',
    tags: ['git', 'commit', 'stage', 'add', 'version control'],
  },
  {
    id: 'git-3',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Push Changes to Remote',
    type: 'code',
    snippet: 'git push origin <branch_name>',
    description: 'Uploads your committed changes from your local branch to the remote repository.',
    tags: ['git', 'push', 'remote', 'version control'],
  },
  {
    id: 'git-4',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Check Status',
    type: 'code',
    snippet: 'git status',
    description: 'Displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven\'t, and which files aren\'t being tracked by Git.',
    tags: ['git', 'status', 'state', 'changes'],
  },
  {
    id: 'git-5',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Pull Changes from Remote',
    type: 'code',
    snippet: 'git pull origin <branch_name>',
    description: 'Fetches changes from a remote repository and merges them into the current branch.',
    tags: ['git', 'pull', 'remote', 'fetch', 'merge'],
  },
  {
    id: 'git-6',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Manage Branches',
    type: 'code',
    snippet: 'git branch\ngit branch <new_branch_name>\ngit branch -d <branch_name>',
    description: 'List all local branches (`git branch`), create a new branch (`git branch <new_branch_name>`), or delete a specified branch (`git branch -d <branch_name>`).',
    tags: ['git', 'branch', 'list', 'create', 'delete'],
  },
  {
    id: 'git-7',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Switch Branches',
    type: 'code',
    snippet: 'git checkout <branch_name>\ngit checkout -b <new_branch_name>',
    description: 'Switches to an existing branch (`git checkout <branch_name>`). Creates a new branch and switches to it (`git checkout -b <new_branch_name>`).',
    tags: ['git', 'checkout', 'switch', 'branch'],
  },
  {
    id: 'git-8',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Merge Branches',
    type: 'code',
    snippet: 'git merge <branch_to_merge>',
    description: 'Joins another branch into your current branch. This is often done after a pull request has been completed.',
    tags: ['git', 'merge', 'join', 'branch'],
  },
  {
    id: 'git-9',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Rebase Branch',
    type: 'code',
    snippet: 'git rebase <base_branch>',
    description: 'Re-applies commits from your current branch onto the tip of another branch, creating a more linear commit history.',
    tags: ['git', 'rebase', 'history', 'linear'],
  },
  {
    id: 'git-10',
    category: 'GIT',
    subCategory: 'bash',
    title: 'View Commit History',
    type: 'code',
    snippet: 'git log --oneline --graph --decorate',
    description: 'Shows the commit history for the current branch in a compact, graphical format.',
    tags: ['git', 'log', 'history', 'commit'],
  },
  {
    id: 'git-11',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Show Changes',
    type: 'code',
    snippet: 'git diff\ngit diff --staged',
    description: 'Shows the differences between your working directory and the staging area. Use `--staged` to see changes staged for the next commit.',
    tags: ['git', 'diff', 'changes', 'compare'],
  },
  {
    id: 'git-12',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Stash Changes',
    type: 'code',
    snippet: 'git stash\ngit stash pop',
    description: 'Temporarily saves your uncommitted changes so you can switch branches. `git stash pop` reapplies the last stashed changes.',
    tags: ['git', 'stash', 'save', 'wip'],
  },
  {
    id: 'git-13',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Manage Remotes',
    type: 'code',
    snippet: 'git remote -v\ngit remote add <name> <url>',
    description: 'Lists the remote repositories you have configured (`git remote -v`). Adds a new remote repository (`git remote add <name> <url>`).',
    tags: ['git', 'remote', 'repository', 'url'],
  },
  {
    id: 'git-14',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Fetch from Remote',
    type: 'code',
    snippet: 'git fetch origin',
    description: 'Downloads commits, files, and refs from a remote repository into your local repo, but does not merge them.',
    tags: ['git', 'fetch', 'download', 'remote'],
  },
  {
    id: 'git-15',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Reset Commits',
    type: 'code',
    snippet: 'git reset --soft HEAD~\ngit reset --hard HEAD~',
    description: 'Un-commits the most recent commit, keeping changes in the staging area (`--soft`) or discarding them entirely (`--hard`). Use with caution.',
    tags: ['git', 'reset', 'undo', 'commit'],
  },
  {
    id: 'git-16',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Create a Tag',
    type: 'code',
    snippet: 'git tag -a v1.0.0 -m "Version 1.0.0"\ngit push origin v1.0.0',
    description: 'Creates an annotated tag for a specific commit, often used for release points. The second command pushes the tag to the remote repository.',
    tags: ['git', 'tag', 'release', 'version'],
  },
  {
    id: 'git-17',
    category: 'GIT',
    subCategory: 'bash',
    title: 'Revert a Commit',
    type: 'code',
    snippet: 'git revert <commit-hash>',
    description: 'Creates a new commit that undoes the changes made in a previous commit. This is a safe way to undo changes, as it doesn\'t alter the project history.',
    tags: ['git', 'revert', 'undo', 'commit', 'history'],
  },
  {
    id: 'git-18',
    category: 'GIT',
    subCategory: 'svg',
    title: 'Git Feature Branch Workflow',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" style="font-family: 'Inter', sans-serif; font-size: 13px; background-color: #1e293b; border-radius: 8px;">
    <style>
      .branch-main { stroke: #38bdf8; }
      .branch-feature { stroke: #34d399; }
      .commit-dot { stroke-width: 2; }
      .main-dot { fill: #38bdf8; stroke: #0f172a; }
      .feature-dot { fill: #34d399; stroke: #0f172a; }
      .merge-dot { fill: #facc15; stroke: #0f172a; }
      .line { stroke-width: 2; }
      .arrow { fill: #64748b; }
      .label { fill: #94a3b8; font-size: 12px; }
      .main-label { fill: #7dd3fc; font-weight: bold; }
      .feature-label { fill: #a7f3d0; font-weight: bold; }
    </style>
    <defs>
      <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
      </marker>
    </defs>
    
    <!-- Main branch line and label -->
    <path d="M 50 100 H 450" class="line branch-main" />
    <text x="460" y="105" class="main-label">main</text>
    
    <!-- Feature branch line and label -->
    <path d="M 150 200 H 350" class="line branch-feature" />
    <text x="360" y="205" class="feature-label">feature-branch</text>
    
    <!-- Commits on main -->
    <circle cx="80" cy="100" r="5" class="commit-dot main-dot" />
    <circle cx="150" cy="100" r="5" class="commit-dot main-dot" />
    <circle cx="420" cy="100" r="7" class="commit-dot merge-dot" />
    
    <!-- Commits on feature branch -->
    <circle cx="220" cy="200" r="5" class="commit-dot feature-dot" />
    <circle cx="290" cy="200" r="5" class="commit-dot feature-dot" />

    <!-- Branching and merging lines -->
    <path d="M 150 100 C 150 150, 150 150, 150 200" stroke-dasharray="4 4" class="line branch-feature" marker-end="url(#arrowhead)"/>
    <path d="M 350 200 C 350 150, 420 150, 420 100" stroke-dasharray="4 4" class="line branch-feature" marker-end="url(#arrowhead)"/>
    
    <!-- Labels -->
    <text x="110" y="80" class="label">1. git checkout -b feature-branch</text>
    <text x="210" y="230" class="label">2. git commit</text>
    <text x="280" y="230" class="label">3. git commit</g>
    <text x="360" y="140" class="label">4. git checkout main</text>
    <text x="360" y="160" class="label">5. git merge feature-branch</text>
  </svg>`,
    description: 'A visual representation of a common Git workflow where a new branch is created from the main branch to work on a feature. After committing changes, the feature branch is merged back into the main branch.',
    tags: ['git', 'workflow', 'branching', 'merge', 'diagram', 'svg'],
  },
];
