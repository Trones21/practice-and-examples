class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let binaryTree = new Node(1);
binaryTree.left = new Node(2);
binaryTree.left.left = new Node(4);
binaryTree.left.left.left = new Node(8);
binaryTree.left.left.right = new Node(9);
binaryTree.left.right = new Node(5);
binaryTree.right = new Node(3);
binaryTree.right.left = new Node(6);
binaryTree.right.right = new Node(7);

function PreOrderTraversal(binaryTree) {

    let allNodes = [];
    doWork(binaryTree, 0)
    console.log(allNodes)


    function doWork(node, lvl) {

       allNodes.push({n:node.value, depth:lvl})
       
        if (node.left) {
            doWork(node.left, lvl + 1)
        }

        if (node.right) {
            doWork(node.right, lvl + 1)
        }

        
    }
}

PreOrderTraversal(binaryTree)