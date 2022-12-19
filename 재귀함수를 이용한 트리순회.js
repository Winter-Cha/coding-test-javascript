/*
트리 순회는 트리 자료구조에서 가 노드를 한 번씩 탐색하는 알고리즘을 말합니다. 이 트리 순회는 여러 방법이 잇지만
재귀를 이용할 수 있는 순회는 전위 순회(Preorder), 중위 순회(Inorder), 후위 순회(Postorder)가 있습니다.
모든 순회는 루트 노드부터 시작하며 어떤 노드를 먼저 방문하는지가 달라집니다. 여기서는 이진 트리를 이용하여 설명드리겠습니다.

1. 전위 순회

전위 순회는 (1)먼저 노드를 방문한 후 (2)왼쪽 서브 트리를 전위 순회한 다음 (3)오른쪽 서브 트리를 전위 순회하는 방식을 의미합니다.
     1
    / \
   /   \
  2     \
 / \     3
4   5   / \
       6   \
            7
           / \
          8   9

preorder(tree){
    방문(tree.root);
    preorder(tree.left);
    preorder(tree.right);
}

2. 중위 순회
중위 순회는 (1)왼쪽 서브 트리를 중위 순회한 후 (2)노드를 방문한 다음에 (3)오른쪽 서브트리를 중위 순회하는 방식을 의미합니다.
다음과 같은 이진 트리가 있다고 가정 해보겠습니다.

     1
    / \
   /   \
  2     \
 / \     3
4   5   / \
       6   \
            7
           / \
          8   9
inorder(tree){
    inorder(tree.left);
    방문(tree.root);
    inorder(tree.right);
}

3. 후위 순회
전위 순회는 (1)왼쪽 서브트리를 후위 순회한 후 (2)오른쪽 서브트리를 후위 순회한 다음 (3)노드를 방문하는 방식을 의미합니다.
다음과 같은 이진 트리가 있다고 가정해보겠습니다.
     1
    / \
   /   \
  2     \
 / \     3
4   5   / \
       6   \
            7
           / \
          8   9

postorder(tree){
    postorder(tree.left);
    postorder(tree.right);
    qkdans(tree.root);
}
*/


class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor(node) {
      this.root = node;
    }
  
    preorder(currentNode) { // 전위 순회
      console.log(currentNode.value);
      if (currentNode.left) this.preorder(currentNode.left);
      if (currentNode.right) this.preorder(currentNode.right);
    }
  
    inorder(currentNode) { // 중위 순회
      if (currentNode.left) this.inorder(currentNode.left);
      console.log(currentNode.value);
      if (currentNode.right) this.inorder(currentNode.right);
    }
  
    postorder(currentNode) { // 후위 순회
      if (currentNode.left) this.postorder(currentNode.left);
      if (currentNode.right) this.postorder(currentNode.right);
      console.log(currentNode.value);
    }
  }
  
  const tree = new Tree(new Node(9));
  tree.root.left = new Node(3);
  tree.root.right = new Node(8);
  tree.root.left.left = new Node(2);
  tree.root.left.right = new Node(5);
  tree.root.right.right = new Node(7);
  tree.root.left.right.right = new Node(4);
  
  tree.preorder(tree.root);
  tree.inorder(tree.root);
  tree.postorder(tree.root);