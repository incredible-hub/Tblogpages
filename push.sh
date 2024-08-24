#!/bin/bash

# 获取当前分支名称
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 检查是否提供了提交信息
if [ "$#" -eq 0 ]; then
    commit_message=""  # 如果没有提供参数，则使用空字符串（不推荐）
    echo "Warning: Committing with an empty message. This is not recommended."
else
    commit_message="$1"  # 使用提供的参数作为提交信息
fi

# 检查是否在git仓库中
if [ ! -d ".git" ]; then
    echo "Error: This directory is not a git repository."
    exit 1
fi

# 检查工作区是否有更改
if ! git diff-index --quiet HEAD --; then
    echo "Adding all changes to staging area..."
    git add .

    # 提交更改
    echo "Committing changes to branch '$current_branch' with message: '$commit_message'..."
    git commit -m "$commit_message"

    # 直接执行git push到当前分支
    echo "Pushing changes to remote repository on branch '$current_branch'..."
    git push origin "$current_branch"
else
    echo "No changes to commit."
fi

echo "Done."