class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name)
        for (child in this.children) {
            child.depthFirstSearch(array)
        }
        return array;
    }
}

let graph = new Node('A');
graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');

debugger;
graph.depthFirstSearch()