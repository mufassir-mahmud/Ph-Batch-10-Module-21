function evenSizeStr(str){
    const size = str.length;
    if(size % 2 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(evenSizeStr('Mufassir'));
console.log(evenSizeStr('Munira'));