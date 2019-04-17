export function getUniqueItemById(list, name) {
    let tmp = new Map()
    let result = list.filter(val => !tmp.has(val[name])&&tmp.set(val[name],val))
    return result
}