import moment from 'moment'

export function getTimeStamp() {
    return new Date().getTime()
}

export function getTimeStr(date) {
    moment.locale('zh-cn')
    return  moment().format('YYYY-MM-DD HH:MM:SS')
}

export function getTimefromNow(dateStr) {
    return  moment(dateStr ,'YYYY-MM-DD HH:MM:SS').fromNow()
}
