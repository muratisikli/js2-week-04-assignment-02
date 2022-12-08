const isTheWordSplit = (pArray) => {
    let firstElement=pArray[0];
    let otherElement=pArray[1].split(",");
    for (let i=0; i<otherElement.length;i++){
        for(let j=0; j<otherElement.length; j++){
            if (otherElement[i]+otherElement[j]===firstElement){
                return otherElement[i]+ ","+ otherElement[j] }
        }
    }
    return "not possible";
};

export { isTheWordSplit };
