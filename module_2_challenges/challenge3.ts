// INTERFACES
interface Tree<T>{
    root: Nodo<T>
}

interface Nodo<T>{
    value: T,
    childrens: Array<Nodo<T>>,
    parent: Nodo<T>
}

// FUNCTIONS

//Returns 'true' if the node is the root node
const isRoot = <T>(node:Nodo<T>):boolean => {
    return node.parent === null;
};

//Returns 'true' if the node is a leaf node
const isLeaf = <T>(node:Nodo<T>):boolean => {
    return node.childrens.length === 0;
};

//Given a value, this function adds a new children to the node
const addChildren = <T>(node:Nodo<T>, value:T): void => {
    let children: Nodo<T> = {
        value,
        childrens: [],
        parent: node
    }
    node.childrens.push(children);
};

//Returns the parent node of a given node
const getParent = <T>(node:Nodo<T>): Nodo<T> => {
    return isRoot(node) ? undefined : node.parent;
};

//Returns children nodes of a given node
const getChildrens = <T>(node:Nodo<T>): Array<Nodo<T>> => {
    return isLeaf(node) ? [] : node.childrens;
};

//Returns the roof nodo of a given tree
const getRoof = <T>(tree:Tree<T>): Nodo<T> => {
    return tree.root;
}

//Test
const nodeRoot:Nodo<number> = {
    value: 1,
    childrens: [],
    parent: null
};

const tree:Tree<number> = {
    root: nodeRoot
};

console.log(isRoot(nodeRoot));
console.log(isLeaf(nodeRoot));
console.log(getParent(nodeRoot));
console.log(getChildrens(nodeRoot));

//Now we add a some childrens to the node root
addChildren(nodeRoot, 2);
addChildren(nodeRoot, 3);
console.log("\r\n");

console.log(isLeaf(nodeRoot));
const rootChildrens = getChildrens(nodeRoot);
console.log(rootChildrens);
console.log(getParent(rootChildrens[0]));
console.log(isRoot(rootChildrens[1]));