//读取存储列表
export function loadData(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (e) {
    return null
  }
}

//存储数据
export function saveData(key, data) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (e) {
    window.localStorage.setItem(key, `${data}`)
    return false
  }
}