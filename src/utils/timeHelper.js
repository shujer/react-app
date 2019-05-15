import dayjs from 'dayjs'

export function getTimeStamp() {
  return new Date().getTime()
}

function commonOp(dayjsObj1, dayjsObj2, key) {
  let diff = dayjsObj1.diff(dayjsObj2, key)
  if (diff > 0) {
    return [true, diff]
  }
  return [false, diff]
}

export function getTimefromNow(dateStr) {
  let dayjsObj1 = dayjs(new Date().toString()),
    dayjsObj2 = dayjs(dateStr)
  let tmp
  if (commonOp(dayjsObj1, dayjsObj2, 'years')[0]) {
    return '1年前'
  }

  if (commonOp(dayjsObj1, dayjsObj2, 'months')[0]) {
    return '1个月前'
  }

  if (commonOp(dayjsObj1, dayjsObj2, 'day')[0]) {
    return '1天前'
  }

  if ((tmp = commonOp(dayjsObj1, dayjsObj2, 'hours')[0])) {
    return tmp + '小时前'
  }

  if ((tmp = commonOp(dayjsObj1, dayjsObj2, 'minutes')[0])) {
    return tmp + '分钟前'
  }
  return '片刻之前'
}
