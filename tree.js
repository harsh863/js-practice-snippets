const { Queue } = require("./queue");
const { Stack } = require("./stack");

class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children.map(item => {
            return (item instanceof Node) ?
                item :
                typeof item === "object" && item.hasOwnProperty('length') ?
                    new Node(...item) : new Node(item)
        });

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(value) {
        (value instanceof Node) ?
            this.children.push(value) :
            this.children.push(new Node(value));
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {
    constructor(rootValue = null, children = []) {
        this.root = rootValue ? new Node(rootValue, children) : null;

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.breadthFirstTraversal = this.breadthFirstTraversal.bind(this);
        this.depthFirstTraversal = this.depthFirstTraversal.bind(this);
        this.getTree = this.getTree.bind(this);
        this.levelWidth = this.levelWidth.bind(this);
    }

    add(value, children = []) {
        if (this.root === null) {
            this.root = (value instanceof Node) ? value: new Node(value, children)
        } else {
            this.root.add(new Node(value, children));
        }
    }

    remove(value) {
        this.root.remove(value);
    }

    breadthFirstTraversal(callback) {
        const queue = new Queue();
        queue.enqueue(this.root);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            for (let childNode of node.children) {
                queue.enqueue(childNode);
            }
            callback(node.data);
        }
    }

    depthFirstTraversal(callback) {
        const stack = new Stack();
        stack.push(this.root);
        while(!stack.isEmpty()) {
            const node = stack.pop();
            for (let childNode of node.children.reverse()) {
                stack.push(childNode);
            }
            callback(node.data);
        }
    }

    getTree(node) {
        const mappedNode = node || this.root;
        return { data: mappedNode.data, children: mappedNode.children.map(childNode => this.getTree(childNode)) }
    }

    levelWidth(nodes = [this.root], level = 0) {
        if (nodes.length === 0) {
            return {};
        }
        let levelNodeCount = {};
        levelNodeCount[level] = nodes.length;
        const allChildNodes = nodes.map(node => node.children).flat(1);
        levelNodeCount = { ...levelNodeCount, ...this.levelWidth(allChildNodes, level + 1) }
        return levelNodeCount;
    }
}

module.exports = { Tree, Node }
