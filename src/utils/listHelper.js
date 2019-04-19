export function getUniqueItemById(list, name) {
    let tmp = new Map()
    return list.filter(val => !tmp.has(val[name])&&tmp.set(val[name],val))
}