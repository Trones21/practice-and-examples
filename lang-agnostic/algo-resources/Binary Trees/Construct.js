
let root;

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i) {
    // Base case for recursion
    if (i < arr.length) {
        let temp = new Node(arr[i]);
        root = temp;

        // insert left child
        root.left = insertLevelOrder(arr, root.left, 2 * i + 1);

        // insert right child
        root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
    }
    return root;
}

// Function to print tree nodes in InOrder fashion
function inOrder(root) {
    if (root != null) {
        inOrder(root.left);
        //document.write(root.data + " ");
        inOrder(root.right);
    }
}

let arr = [0, 6, 2, 9, 8, 7];
root = insertLevelOrder(arr, root, 0);
inOrder(root);
