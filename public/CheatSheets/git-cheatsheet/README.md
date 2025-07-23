# 📚 Git Cheatsheet

A comprehensive reference guide for Git version control system, including commands, workflows, and best practices.

## 🚀 Getting Started

### Initial Setup

```bash
# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default editor
git config --global core.editor "code --wait"

# Set default branch name
git config --global init.defaultBranch main

# View configuration
git config --list
git config user.name
git config user.email
```

### Repository Setup

```bash
# Initialize new repository
git init

# Clone existing repository
git clone <repository-url>
git clone <repository-url> <directory-name>

# Clone specific branch
git clone -b <branch-name> <repository-url>

# Clone with limited history (shallow clone)
git clone --depth 1 <repository-url>
```

## 📝 Basic Commands

### File Operations

```bash
# Check repository status
git status
git status --short  # Short format
git status -s       # Short format

# Add files to staging area
git add <filename>
git add .           # Add all files
git add *.js        # Add all JavaScript files
git add -p <filename>  # Interactive add (patch mode)

# Remove files from staging area
git reset HEAD <filename>
git restore --staged <filename>  # Git 2.23+

# Commit changes
git commit -m "Commit message"
git commit -am "Commit message"  # Add and commit tracked files
git commit --amend               # Amend last commit
git commit --amend --no-edit     # Amend without changing message

# View commit history
git log
git log --oneline
git log --graph --oneline --all
git log -p <filename>            # Show changes for specific file
git log --author="Author Name"
git log --since="2024-01-01"
git log --until="2024-12-31"
```

### Branching

```bash
# List branches
git branch
git branch -a                    # All branches (local and remote)
git branch -r                    # Remote branches only

# Create branch
git branch <branch-name>
git checkout -b <branch-name>    # Create and switch to branch
git switch -c <branch-name>      # Git 2.23+ (create and switch)

# Switch branches
git checkout <branch-name>
git switch <branch-name>         # Git 2.23+

# Delete branch
git branch -d <branch-name>      # Safe delete (won't delete if unmerged)
git branch -D <branch-name>      # Force delete

# Rename branch
git branch -m <old-name> <new-name>
git branch -m <new-name>         # Rename current branch
```

## 🔄 Remote Operations

### Remote Management

```bash
# List remotes
git remote -v

# Add remote
git remote add <name> <url>
git remote add origin https://github.com/user/repo.git

# Remove remote
git remote remove <name>

# Rename remote
git remote rename <old-name> <new-name>

# Fetch from remote
git fetch <remote-name>
git fetch origin

# Pull changes
git pull <remote-name> <branch-name>
git pull origin main
git pull --rebase origin main    # Pull with rebase

# Push changes
git push <remote-name> <branch-name>
git push origin main
git push -u origin <branch-name> # Set upstream and push
git push --force-with-lease      # Safe force push
```

### Working with Remotes

```bash
# Show remote information
git remote show origin

# Update remote URL
git remote set-url origin <new-url>

# Fetch all remotes
git fetch --all

# Push all branches
git push --all origin

# Push tags
git push origin --tags
```

## 🔀 Merging & Rebasing

### Merging

```bash
# Merge branch into current branch
git merge <branch-name>
git merge --no-ff <branch-name>  # No fast-forward merge

# Abort merge
git merge --abort

# Continue merge after resolving conflicts
git add <resolved-files>
git commit

# Merge specific commit
git cherry-pick <commit-hash>
git cherry-pick <commit-hash1> <commit-hash2>
```

### Rebasing

```bash
# Rebase current branch onto another branch
git rebase <base-branch>
git rebase main

# Interactive rebase
git rebase -i HEAD~3             # Rebase last 3 commits
git rebase -i <commit-hash>      # Rebase from specific commit

# Abort rebase
git rebase --abort

# Continue rebase after resolving conflicts
git add <resolved-files>
git rebase --continue

# Skip commit during rebase
git rebase --skip
```

## 📋 Stashing

```bash
# Stash changes
git stash
git stash push -m "Stash message"
git stash push <filename>        # Stash specific file

# List stashes
git stash list

# Apply stash
git stash apply                   # Apply most recent stash
git stash apply stash@{n}        # Apply specific stash
git stash pop                    # Apply and remove most recent stash
git stash pop stash@{n}          # Apply and remove specific stash

# Show stash contents
git stash show
git stash show -p                # Show patch

# Drop stash
git stash drop stash@{n}
git stash clear                  # Remove all stashes
```

## 🏷️ Tagging

```bash
# Create tag
git tag <tag-name>
git tag -a <tag-name> -m "Tag message"  # Annotated tag
git tag -s <tag-name> -m "Signed tag"   # Signed tag

# List tags
git tag
git tag -l "v1.*"               # List tags matching pattern

# Show tag information
git show <tag-name>

# Delete tag
git tag -d <tag-name>
git push origin --delete <tag-name>  # Delete remote tag

# Push tags
git push origin <tag-name>
git push origin --tags
```

## 🔍 Inspection & Comparison

### Viewing Changes

```bash
# Show changes in working directory
git diff

# Show staged changes
git diff --staged
git diff --cached

# Show changes between commits
git diff <commit1> <commit2>
git diff HEAD~1 HEAD

# Show changes for specific file
git diff <filename>
git diff HEAD~1 HEAD <filename>

# Show commit changes
git show <commit-hash>
git show <commit-hash> --name-only
```

### Blame & Log

```bash
# Show who changed what in a file
git blame <filename>
git blame -L 10,20 <filename>    # Show lines 10-20

# Show file history
git log --follow <filename>
git log --oneline --follow <filename>

# Show commit statistics
git log --stat
git log --shortstat
```

## 🛠️ Advanced Commands

### Reset

```bash
# Soft reset (keep changes staged)
git reset --soft HEAD~1

# Mixed reset (default, unstage changes)
git reset HEAD~1
git reset --mixed HEAD~1

# Hard reset (discard all changes)
git reset --hard HEAD~1
git reset --hard <commit-hash>

# Reset specific file
git reset HEAD <filename>
git reset --hard HEAD <filename>
```

### Clean

```bash
# Show what would be cleaned
git clean -n

# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd

# Remove ignored files too
git clean -fdx
```

### Reflog

```bash
# Show reflog
git reflog

# Show reflog for specific reference
git reflog show HEAD
git reflog show main

# Reset to specific reflog entry
git reset --hard HEAD@{n}
```

## 🔧 Configuration

### Global Configuration

```bash
# Set global user
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default editor
git config --global core.editor "code --wait"

# Set default branch
git config --global init.defaultBranch main

# Set default merge tool
git config --global merge.tool vscode

# Set aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

### Repository Configuration

```bash
# Set repository-specific user
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Set remote tracking
git config branch.main.remote origin
git config branch.main.merge refs/heads/main
```

## 📋 Common Workflows

### Feature Branch Workflow

```bash
# Start new feature
git checkout main
git pull origin main
git checkout -b feature/new-feature

# Work on feature
git add .
git commit -m "Add new feature"

# Push feature branch
git push -u origin feature/new-feature

# Create pull request (on GitHub/GitLab)
# After merge, clean up
git checkout main
git pull origin main
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

### Hotfix Workflow

```bash
# Create hotfix branch
git checkout main
git checkout -b hotfix/critical-bug

# Fix the bug
git add .
git commit -m "Fix critical bug"

# Merge to main and develop
git checkout main
git merge hotfix/critical-bug
git tag -a v1.0.1 -m "Version 1.0.1"
git push origin main --tags

git checkout develop
git merge hotfix/critical-bug
git push origin develop

# Clean up
git branch -d hotfix/critical-bug
```

### Git Flow Workflow

```bash
# Initialize git flow
git flow init

# Start feature
git flow feature start feature-name
# Work on feature
git flow feature finish feature-name

# Start release
git flow release start 1.0.0
# Finish release
git flow release finish 1.0.0

# Start hotfix
git flow hotfix start hotfix-name
# Finish hotfix
git flow hotfix finish hotfix-name
```

## 🚨 Troubleshooting

### Common Issues

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Fix commit message
git commit --amend

# Recover deleted branch
git reflog
git checkout -b <branch-name> <commit-hash>

# Fix detached HEAD
git checkout main
git branch <new-branch-name> <commit-hash>

# Clean up repository
git gc
git prune
```

### Conflict Resolution

```bash
# During merge conflict
git status                    # See conflicted files
# Edit conflicted files
git add <resolved-files>      # Mark as resolved
git commit                    # Complete merge

# During rebase conflict
git status                    # See conflicted files
# Edit conflicted files
git add <resolved-files>      # Mark as resolved
git rebase --continue         # Continue rebase
```

## 📚 Best Practices

### Commit Messages

```bash
# Good commit message format
git commit -m "feat: add user authentication system

- Implement JWT token authentication
- Add login/logout functionality
- Include password hashing with bcrypt
- Add user registration endpoint

Closes #123"
```

### Branch Naming

```bash
# Feature branches
feature/user-authentication
feature/add-payment-gateway

# Bug fixes
bugfix/login-error
hotfix/security-vulnerability

# Releases
release/v1.2.0
hotfix/v1.1.1
```

### Git Ignore

```bash
# .gitignore examples
node_modules/
*.log
.env
.DS_Store
dist/
build/
*.tmp
*.temp
```

## 🔗 Useful Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Happy versioning! 📚** 