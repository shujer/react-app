export function getUniqueList(list, name) {
    let tmp = new Map()
    return list.filter(val => !tmp.has(val[name])&&tmp.set(val[name],val))
}

export function isEqualList(list1, list2, name) {
    if(!list1 || !list2 || list1.length !== list2.length){
        return false
    }
    for(let i = 0; i < list1.lenght; i++) {
        if(list1[i][name] !== list2[i][name]) {
            return false
        }
    }
    return true
}