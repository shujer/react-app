function loadData(key) {
  //读取存储列表
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (e) {
    return window.localStorage.getItem(key)
  }
}
function saveData(key, data) {
  //存储数据
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    window.localStorage.setItem(key, `${data}`)
  }
}

export {
    loadData,
    saveData
}