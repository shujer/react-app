import moment from 'moment'

function getTimeStamp() {
    return new Date().getTime()
}

function getTimeStr(date) {
    moment.locale('zh-cn')
    return  moment().format('YYYY-MM-DD HH:MM:SS')
}

function getTimefromNow(dateStr) {
    // moment.locale('zh-cn')
    // console.log(dateStr)
    console.log(dateStr)
    console.log( moment(dateStr, 'YYYY-MM-DD HH:MM:SS').fromNow())
    return  moment(dateStr ,'YYYY-MM-DD HH:MM:SS').fromNow()
}

export {
    getTimeStr,
    getTimefromNow
}