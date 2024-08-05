class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > newNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (current.val > val) {
      if (current.left === null) {
        current.left = new Node(val);
      } else {
        this.insertRecursively(val, current.left);
      }
    } else if (current.val < val) {
      if (current.right === null) {
        current.right = new Node(val);
      } else {
        this.insertRecursively(val, current.right);
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return undefined;

    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      if (current.val > val) {
        current = current.left;
      } else if (current.val < val) {
        current = current.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) return undefined;
    if (val === current.val) return current;
    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(visited = [], current = this.root) {
    if (current === null) return visited;
    visited.push(current.val);
    if (current.left) this.dfsPreOrder(visited, current.left);
    if (current.right) this.dfsPreOrder(visited, current.right);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(visited = [], current = this.root) {
    if (current === null) return visited;
    if (current.left) this.dfsInOrder(visited, current.left);
    visited.push(current.val);
    if (current.right) this.dfsInOrder(visited, current.right);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(visited = [], current = this.root) {
    if (current === null) return visited;
    if (current.left) this.dfsPostOrder(visited, current.left);
    if (current.right) this.dfsPostOrder(visited, current.right);
    visited.push(current.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    let numArr = this.dfsInOrder();
    return numArr[numArr.length - 2];
  }
}

module.exports = BinarySearchTree;
