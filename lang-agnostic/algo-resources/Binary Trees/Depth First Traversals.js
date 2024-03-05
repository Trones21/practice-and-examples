class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insertNode(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (value < root.value) {
        root.left = insertNode(root.left, value);
    } else {
        root.right = insertNode(root.right, value);
    }

    return root;
}

//Stack overflow Question - How can I avoid making this global,
//why isn't it in the scope of the calling function, shouldn't it?
function PreOrderTraversal(binaryTree) {
    let allNodes = [];
    doWork(binaryTree)
    return allNodes

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


//in order traversals come out sorted on BSTs
function InOrderTraversal(binaryTree) {
    let allNodes = [];
    doWork(binaryTree)
    return allNodes

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
    return allNodes

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


let BST = null;
insertNode(BST, 4);
insertNode(BST, 7);
insertNode(BST, 2);
insertNode(BST, 15);


PreOrderTraversal(BST);
InOrderTraversal(BST);
PostOrderTraversal(BST);
