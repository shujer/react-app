export function getUniqueList(list, name) {
  let tmp = new Map()
  return list.filter(val => !tmp.has(val[name]) && tmp.set(val[name], val))
}

export function isEqualList(list1, list2, name) {
  if (!list1 || !list2 || list1.length !== list2.length) {
    return false
  }
  for (let i = 0; i < list1.lenght; i++) {
    if (list1[i][name] !== list2[i][name]) {
      return false
    }
  }
  return true
}

export function sortByKey(list, key, orient = 'down') {
  let tmp = [...list]
  if (orient === 'up') {
    return tmp.sort((a, b) => (a[key] - b[key]))
  } else {
    return tmp.sort((a, b) => b[key] - a[key])
  }
}
