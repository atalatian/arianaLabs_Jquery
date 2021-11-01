const copyElementTreeWrap = (object) => {
    const copyElement = (object) => {
        const newObject = {...object};
        newObject.children = newObject.children.map(child => Object.assign({}, child))
        return newObject;
    }

    const copyElementTree = (parent ,object, index) => {
        const newObject = copyElement(object);
        if (parent){
            parent.children[index] = object;
        }
        newObject.children.map((child, index)=>{
            copyElementTree(newObject ,child, index);
        });

        return newObject;
    }

    return copyElementTree(null, object, 0);
}