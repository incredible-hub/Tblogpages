# 树的遍历

> 树结构一般的遍历方式分为两大类，深度有限和广度优先，深度优先的遍历方式有先序、中序和后序三种，广度优先遍历方式有层序遍历和前序遍历两种。

## 深度优先遍历

### 递归遍历前中后序

#### 前序遍历

```js
// 前序遍历
function preOrder(root) {
  const traverse = (root, res = []) => {
    if (!root) return [];
    res.push(root.val);
    traverse(root.left, res);
    traverse(root.right, res);
  };
  traverse(root);
  return res;
}
```

#### 中序遍历

```js
function inOrder(root) {
  const traverse = (root, res = []) => {
    if (!root) return [];
    traverse(root.left, res);
    res.push(root.val);
    traverse(root.right, res);
  };
  traverse(root);
  return res;
}
```

#### 后续遍历

```js
function inOrder(root) {
  const traverse = (root, res = []) => {
    if (!root) return [];
    traverse(root.left, res);
    traverse(root.right, res);
    res.push(root.val);
  };
  traverse(root);
  return res;
}
```

### 循环迭代遍历前中后序

> 这个稍微麻烦一点，前序简单，中序稍微复杂点，后序稍微麻烦一点。

#### 前序遍历

```js
function preOrder(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    // 先放右子树，后放左子树
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
}
```

#### 中序遍历

> 要先遍历做子树，双循环

```js
function inOrder(root) {
  if (!root) return [];
  let stack = [];
  let res = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
  }
  return res;
}
```

#### 后序遍历

> 需要记录前一个节点

```js
function preOrder(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    // 先放右子树，后放左子树
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
}
```
