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

//Stack overflow Question - How can I avoid making this global,
//why isn't it in the scope of the calling function, shouldn't it?
//let allNodes = [];
//PreOrderTraversal
function PreOrderTraversal(binaryTree) {
    let allNodes = [];
    doWork(binaryTree)
    console.log(allNodes)

function doWork(node) {
        //node - leftsubtree - rightsubtree
        allNodes.push(node.value);
              
        if (node.left) {
            doWork(node.left);
        }

        if (node.right) {
            doWork(node.right);
        }
    }
}

function InOrderTraversal(binaryTree) {
    let allNodes = [];
    doWork(binaryTree)
    console.log(allNodes)

function doWork(node) {
        //node - leftsubtree - rightsubtree            
        if (node.left) {
            doWork(node.left);
        }

        allNodes.push(node.value);

        if (node.right) {
            doWork(node.right);
        }
    }
}


function PostOrderTraversal(binaryTree) {
    let allNodes = [];
    doWork(binaryTree)
    console.log(allNodes)

function doWork(node) {
        //node - leftsubtree - rightsubtree            
        if (node.left) {
            doWork(node.left);
        }

        if (node.right) {
            doWork(node.right);
        }

        allNodes.push(node.value);
    }
}


PreOrderTraversal(binaryTree);
InOrderTraversal(binaryTree);
PostOrderTraversal(binaryTree);
