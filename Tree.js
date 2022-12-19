// 이진트리
// 0번 인텍스는 편의를 위해 비워둔다.
// Left = Index * 2
// Right = Index * 2 + 1
// Parent = floor(Index / 2)
const tree = [
    undefined,
    // 1
    9,
    // 1*2, 1*2+1
    3, 8,

    2, 5, undefined, 7,
    undefined, undefined, undefined, 4
]

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

    display() {
        // Level Order
        const queue = new Queue();
        queue.enqueue(this.root);
        while (queue.size) {
            const currentNode = queue.dequeue();
            console.log(currentNode.value);
            if(currentNode.left) queue.enqueue(currentNode.left);
            if(currentNode.right) queue.enqueue(currentNode.right);
        }
    }
}

const tree1 = new Tree(new Node(9));
tree1.root.left = new Node(3);
tree1.root.right = new Node(8);
tree1.root.left.left = new Node(2);
tree1.root.left.right = new Node(5);
tree1.root.right.right = new Node(7);
tree1.root.left.right.right = new Node(4);

console.log(tree1);